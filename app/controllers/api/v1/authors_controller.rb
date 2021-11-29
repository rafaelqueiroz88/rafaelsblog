module Api
    module V1
        class AuthorsController < ApplicationController

            protect_from_forgery with: :null_session

            # @get: /authors/:slug
            def show
                author = Author.find_by(slug: params[:slug])
                if author.nil?
                    render json: { error: 'Author not found' }, status: 404
                else
                    render json: AuthorBlueprint.render(author, view: :normal), status: 200
                end
            end
        end
    end
end