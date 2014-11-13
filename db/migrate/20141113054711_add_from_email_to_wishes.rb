class AddFromEmailToWishes < ActiveRecord::Migration
  def change
    add_column :wishes, :from_email, :string
  end
end
