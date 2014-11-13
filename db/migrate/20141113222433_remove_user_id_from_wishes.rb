class RemoveUserIdFromWishes < ActiveRecord::Migration
  def change
    remove_column :wishes, :user_id
  end
end
