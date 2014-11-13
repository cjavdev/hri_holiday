class Cheer
  def initialize(wish_params)
    from = User.where(email: wish_params[:from_email]).first_or_create!
    to = User.where(email: wish_params[:from_email]).first_or_create!
    wish = Wish.create(wisher: from, wishee: to, note: wish_params[:note])
    WishMailer.holiday_cheer(wish).deliver
  end
end
