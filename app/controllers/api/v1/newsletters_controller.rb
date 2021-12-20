module Api
    module V1
        class NewslettersController < ApplicationController

            protect_from_forgery with: :null_session

            # @post: /newsletters
            def create
                newsletter = Newsletter.new(newsletters_params)
                if newsletter.save
                    render json: { message: "success" }, status: 200
                else
                    render json: { message: newsletter.errors.messages }, status: 400
                end
            end


            private

                def newsletters_params
                    params.require(:newsletter).permit(:email)
                end
        end
    end
end