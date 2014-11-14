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
require 'digest'
class User < ActiveRecord::Base
  has_many :wishes, foreign_key: :wishee_id
  has_many :wished_wishes, foreign_key: :wisher_id

  before_validation do
    self.auth_token ||= SecureRandom.hex
  end

  def gravatar
    md5 = Digest::MD5.new(email)
  end
end
