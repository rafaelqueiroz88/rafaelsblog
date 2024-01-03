class PostShowWorker
    include Sidekiq::Worker

    sidekiq_options retry: false

    def perform(slug)
        post = Post.find_by(slug: slug)
        if post
            post
        else
            false
        end
    end
end