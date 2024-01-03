class PostDeleteWorker
    include Sidekiq::Worker

    sidekiq_options retry: false

    def perform(slug)
        post = Post.find_by(slug: slug)
        post.delete
    end
end