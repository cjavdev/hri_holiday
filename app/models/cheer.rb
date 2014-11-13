class Cheer
  def initialize(wish_params)
    from = User.where(email: wish_params[:from_email]).first_or_create!
    to = User.where(email: wish_params[:to_email]).first_or_create!
    @wish = Wish.new(wisher: from, wishee: to, note: wish_params[:note])
    WishMailer.holiday_cheer(@wish).deliver
  end

  def save
    @wish.save
  end

  def to_json(*args)
    @wish.to_json(*args)
  end
end
