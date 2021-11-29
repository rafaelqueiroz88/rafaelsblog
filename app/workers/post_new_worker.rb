class PostNewWorker
    include Sidekiq::Worker

    sidekiq_options retry: false

    def perform(title, description, content, author_slug)
        author = Author.find_by(slug: author_slug)
        post = Post.new({title: title, description: description, content: content, author_id: author.id})
        post.save
    end
end