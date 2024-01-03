module Api
    module V1
        class MessagesController < ApplicationController

            protect_from_forgery with: :null_session

            # @get: /api/v1/messages.json
            def index
                messages = Message.all
                render json: messages
            end

            # @post: /api/v1/messages
            def create
                message = Message.new(message_params)
                if message.save
                    puts "Message ok"
                    ActionCable.server.broadcast("MessagesChannel", {
                        messages: message
                    })
                    render json: message
                else
                    puts "Failed to broadcast message"
                end
            end


            private

                def message_params
                    params.require(:message).permit(:user, :message)
                end
        end
    end
end