class WishMailer < ActionMailer::Base
  default from: "cj@insiderai.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.wish_mailer.holiday_cheer.subject
  #
  def holiday_cheer(wish)
    @greeting = "Happy Holidays"

    mail to: wish.to_email, from: wish.from_email
  end
end
