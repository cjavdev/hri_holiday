class AddGeoToWish < ActiveRecord::Migration
  def change
    add_column :wishes, :latitude, :float
    add_column :wishes, :longitude, :float
    add_column :wishes, :altitude, :float
    add_column :wishes, :accuracy, :float
    add_column :wishes, :altitudeAccuracy, :float
    add_column :wishes, :heading, :float
    add_column :wishes, :speed, :float
    add_column :wishes, :address, :string
  end
end
