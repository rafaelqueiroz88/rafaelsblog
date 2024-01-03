class PostNewWorker
    include Sidekiq::Worker

    sidekiq_options retry: false

    def perform(post)
        if post.save
            post
        else
            false
        end
    end
end