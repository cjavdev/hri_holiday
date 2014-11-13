class WishMailer < ActionMailer::Base
  default from: "cj@insiderai.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.wish_mailer.holiday_cheer.subject
  #
  def holiday_cheer(wish)
    @greeting = "Happy Holidays"
    @wish = wish

    mail to: wish.wishee.email, from: wish.wisher.email
  end
end
