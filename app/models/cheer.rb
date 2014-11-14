class Cheer
  def initialize(wish_params)
    from = User.where(email: wish_params[:from_email]).first_or_create!
    to = User.where(email: wish_params[:to_email]).first_or_create!
    @wish = Wish.new(wisher: from, wishee: to, note: wish_params[:note])
    WishMailer.holiday_cheer(@wish).deliver
  end

  def sent!
    Pusher['cheer_channel'].trigger('wish_sent', {
      message: 'cheer sent!',
      wish: @wish.to_json
    })
  end

  def save
    @wish.save
  end

  def to_json(*args)
    @wish.to_json(*args)
  end
end
