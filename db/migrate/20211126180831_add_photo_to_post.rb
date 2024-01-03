class AddPhotoToPost < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :photo_data, :string
  end
end
