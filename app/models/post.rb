class Post < ApplicationRecord

    belongs_to :author

    before_create :slugify

    include ImageUploader::Attachment(:photo)

    def slugify
        puzzle = rand(11111...99999)
        self.slug = "#{title.parameterize}-#{puzzle}"
    end

    def get_titles
        posts.title
    end
end