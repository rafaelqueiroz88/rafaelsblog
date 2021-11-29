class AddSlugToPost < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :slug, :string
  end
end
