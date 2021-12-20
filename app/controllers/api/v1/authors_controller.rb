module Api
    module V1
        class AuthorsController < ApplicationController

            protect_from_forgery with: :null_session

            before_action :authorized, except: [:show]
            before_action :set_author, only: [:show]

            # @get: /authors/:slug
            def show
                if @author.nil?
                    render json: { error: 'Author not found' }, status: 404
                else
                    render json: AuthorBlueprint.render(@author, view: :normal), status: 200
                end
            end


            private

                def set_author
                    @author = Author.find_by(slug: params[:slug])
                end
        end
    end
end