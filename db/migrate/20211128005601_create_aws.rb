class CreateAws < ActiveRecord::Migration[6.1]
  def change
    create_table :aws do |t|
      t.string :bucket
      t.string :region
      t.string :access_key_id
      t.string :secret_access_key

      t.timestamps
    end
  end
end
