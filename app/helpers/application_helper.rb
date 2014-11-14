require 'digest'

module ApplicationHelper
  def gravatar_url(email, size = 24)
    md5 = Digest::MD5.hexdigest(email)
    "http://gravatar.com/avatar/#{ md5 }?s=#{ size }&d=identicon"
  end
end
