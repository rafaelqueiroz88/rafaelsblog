class Author < ApplicationRecord

    require 'securerandom'

    has_many :posts

    before_create :slugify

    def slugify
        uuid = SecureRandom.uuid
        self.slug = "#{name.parameterize}-#{uuid}"
    end
end