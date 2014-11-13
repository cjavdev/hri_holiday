class ChangeWishToSelfjoin < ActiveRecord::Migration
  def change
    remove_column :wishes, :to_email
    remove_column :wishes, :from_email
    add_column :wishes, :wisher_id, :integer
    add_column :wishes, :wishee_id, :integer
  end
end
