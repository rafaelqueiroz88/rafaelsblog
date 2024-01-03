class CreateSenders < ActiveRecord::Migration[6.1]
  def change
    create_table :senders do |t|
      t.string :address
      t.string :port
      t.string :user_name
      t.string :password
      t.string :domain

      t.timestamps
    end
  end
end
