class PostUploadWorker
    include Sidekiq::Worker

    sidekiq_options retry: false

    def perform(post, post_params)
        if post.update(post_params)
            post
        else
            false
        end
    end
end