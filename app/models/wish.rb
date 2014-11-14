# == Schema Information
#
# Table name: wishes
#
#  id               :integer          not null, primary key
#  note             :string(255)
#  created_at       :datetime
#  updated_at       :datetime
#  wisher_id        :integer
#  wishee_id        :integer
#  latitude         :float
#  longitude        :float
#  altitude         :float
#  accuracy         :float
#  altitudeAccuracy :float
#  heading          :float
#  speed            :float
#  address          :string(255)
#

class Wish < ActiveRecord::Base
  belongs_to :wisher, class_name: 'User'
  belongs_to :wishee, class_name: 'User'

  reverse_geocoded_by :latitude, :longitude, address: :address
  after_validation :reverse_geocode
end
