class PostUpdateWorker
    include Sidekiq::Worker

    sidekiq_options retry: false

    def perform(slug, title, description, content)
        post = Post.find_by(slug: slug)
        if post.update({title: title, description: description, content: content})
            puts "Success"
        else
            puts "Failed"
        end
    end
end