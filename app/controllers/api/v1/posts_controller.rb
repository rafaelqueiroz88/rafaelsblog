module Api
    module V1
        class PostsController < ApplicationController

            protect_from_forgery with: :null_session

            # prefix for all verbs: /api/v1
            # @get: /posts.json
            def index
                posts = PostIndexWorker.new.perform
                render json: PostBlueprint.render(posts, view: :extended)
            end

            # @get: /posts/:slug
            def show
                post = PostShowWorker.new.perform(params[:slug])
                if post
                    render json: PostBlueprint.render(post, view: :extended), status: 200
                else
                    render json: { message: "No post found with the given params" }, status: 404
                end
            end

            # @post: /posts
            def create
                post = Post.new(post_params)
                PostNewWorker.perform_async(post.title, post.description, post.content, params[:author_slug])
                render json: NewPostBlueprint.render(post, view: :normal), status: 200
            end

            # @patch: /posts/:slug
            def update
                post = Post.find_by(slug: params[:slug])
                PostUpdateWorker.perform_async(params[:slug], params[:title], params[:description], params[:content])
                render json: PostBlueprint.render(post, view: :extended), status: 200
            end

            # @delete: /posts/:slug
            def destroy
                PostDeleteWorker.perform_async(params[:slug])
                # head :no_content
                render json: { message: "This Post has been deleted" }, status: 200
            end

            # @patch: /post/attachment/:slug
            def attachment
                post = Post.find_by(slug: params[:slug])
                if post.update(post_params)
                    render json: PostBlueprint.render(post), status: 200
                else
                    render json: { message: "Failed to upload file" }, status: 422
                end
            end


            private

            def post_params
                params.require(:post).permit(:photo, :title, :description, :content, :author_slug)
            end
        end
    end
end