# == Schema Information
#
# Table name: wishes
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  to_email   :string(255)
#  note       :string(255)
#  created_at :datetime
#  updated_at :datetime
#  from_email :string(255)
#

class Wish < ActiveRecord::Base
  belongs_to :wisher, class_name: 'User'
  belongs_to :wishee, class_name: 'User'

  reverse_geocoded_by :latitude, :longitude, address: :address
  after_validation :reverse_geocode
end
