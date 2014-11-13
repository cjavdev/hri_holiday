class CreateWishes < ActiveRecord::Migration
  def change
    create_table :wishes do |t|
      t.integer :user_id
      t.string :to_email
      t.string :note

      t.timestamps
    end
    add_index :wishes, :user_id
    add_index :wishes, [:user_id, :to_email], unique: true
  end
end
