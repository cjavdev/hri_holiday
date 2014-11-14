class Cheer
  attr_reader :wish_params, :wish

  def initialize(wish_params)
    @wish_params = wish_params
  end

  def wish
    @wish ||= Wish.new(
      wisher: from,
      wishee: to,
      note: wish_params[:note],
      latitude: wish_params[:latitude],
      longitude: wish_params[:longitude],
      altitude: wish_params[:altitude],
      accuracy: wish_params[:accuracy],
      altitudeAccuracy: wish_params[:altitudeAccuracy],
      heading: wish_params[:heading],
      speed: wish_params[:speed]
    )
  end

  def from
    @from ||= User.where(email: wish_params[:from_email]).first_or_create!
  end

  def to
    @to ||= User.where(email: wish_params[:to_email]).first_or_create!
  end

  def push
    Pusher['cheer_channel'].trigger('wish_sent', {
      message: 'cheer sent!',
      wish: wish.to_json
    })
  end

  def deliver
    WishMailer.holiday_cheer(wish).deliver
  end

  def save
    if wish.save
      push
      deliver
      true
    else
      errors.concat!(wish.errors.full_messages)
      false
    end
  end

  def errors
    @errors ||= []
  end

  def to_json(*args)
    wish.to_json(*args)
  end
end
