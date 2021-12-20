module Api
    module V1
        class AuthenticationController < ApplicationController

            protect_from_forgery with: :null_session, :unless => Rails.env.test?

            before_action :authorized, except: [:create, :login]

            # @post: /api/v1/login
            def login
                @user = User.find_by(email: params[:email])
                if @user && @user.authenticate(params[:password])
                    token = encode_token({ user_id: @user.id })
                    render json: { user: @user, token: token }, status: 200
                else
                    render json: { error: "Invalid e-mail or password" }, status: 208
                end
            end

            # @get: /api/v1/auto_login
            def auto_login
                render json: @user
            end
        end
    end
end