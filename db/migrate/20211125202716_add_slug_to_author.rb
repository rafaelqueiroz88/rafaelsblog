class AddSlugToAuthor < ActiveRecord::Migration[6.1]
  def change
    add_column :authors, :slug, :string
  end
end
