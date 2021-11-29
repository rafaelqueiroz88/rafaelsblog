class Author < ApplicationRecord

    has_many :posts

    before_create :slugify

    def slugify
        puzzle = rand(11111...99999)
        self.slug = "#{name.parameterize}-#{puzzle}"
    end
end