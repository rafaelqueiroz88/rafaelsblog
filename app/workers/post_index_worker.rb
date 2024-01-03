class PostIndexWorker
    include Sidekiq::Worker

    sidekiq_options retry: false

    def perform
        post = Post.all
        if post
            post
        else
            false
        end
    end
end