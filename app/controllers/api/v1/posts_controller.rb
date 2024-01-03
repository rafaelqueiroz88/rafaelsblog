module Api
    module V1
        class PostsController < ApplicationController

            protect_from_forgery with: :null_session, :unless => Rails.env.test?

            before_action :set_post, only: [:show, :update, :destroy, :attachment]
            before_action :set_author, only: [:create, :update]

            # prefix for all verbs: /api/v1
            # @get: /posts.json
            def index
                posts = PostIndexWorker.new.perform
                render json: PostBlueprint.render(posts, view: :extended)
            end

            # @get: /posts/:slug
            def show
                render json: PostBlueprint.render(@post, view: :extended), status: 200
            end

            # @post: /posts
            def create
                post = Post.new(post_params)
                post.set_author(@author.id)
                post = PostNewWorker.new.perform(post)
                if post
                    render json: NewPostBlueprint.render(post, view: :normal), status: 200
                else
                    render json: { message: post.errors.messages  }, status: 400
                end
            end

            # @patch: /posts/:slug
            def update
                unless @author.id != @post.author_id
                    post = PostUpdateWorker.new.perform(@post, post_params)
                    if post
                        render json: PostBlueprint.render(post, view: :extended), status: 200
                    else
                        render json: { error: post.errors.messages }, status: 400
                    end
                else
                    render json: { error: 'This author is not post owner' }, status: 401
                end
            end

            # @delete: /posts/:slug
            def destroy
                PostDeleteWorker.perform_async(@post.slug)
                # head :no_content
                render json: { message: 'This Post has been deleted' }, status: 200
            end

            # @patch: /post/attachment/:slug
            def attachment
                post = PostUploadWorker.perform_async(@post, post_params)
                if post
                    # render json: PostBlueprint.render(post), status: 200
                    render json: { message: 'Uploaded successfully' }, status: 200
                else
                    render json: { message: 'Failed to upload file' }, status: 422
                end
            end


            private

                def set_post
                    @post = PostShowWorker.new.perform(params[:slug])
                    unless @post
                        render json: { message: 'Post not found' }, status: 404
                    end
                end

                def set_author
                    @author = Author.find_by(slug: params[:author_slug])
                    if @author.nil?
                        render json: { error: 'Author not found' }, status: 404
                    end
                end

                def post_params
                    params.require(:post).permit(:photo, :title, :description, :content, :author_slug)
                end
        end
    end
end