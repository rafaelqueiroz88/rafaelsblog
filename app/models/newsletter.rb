class Newsletter < ApplicationRecord
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :email, uniqueness: true
    validates :email, presence: true
end
