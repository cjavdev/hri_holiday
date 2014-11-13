# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  email      :string(255)
#  auth_token :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class User < ActiveRecord::Base
  before_validation do
    self.auth_token ||= SecureRandom.hex
  end
end
