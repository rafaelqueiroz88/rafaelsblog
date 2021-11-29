class AddAuthorToPosts < ActiveRecord::Migration[6.1]
  def change
    add_reference :posts, :author, null: false, foreign_key: true
  end
end
