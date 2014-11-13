class WishMailer < ActionMailer::Base
  default from: "from@example.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.wish_mailer.holiday_cheer.subject
  #
  def holiday_cheer
    @greeting = "Hi"

    mail to: "to@example.org"
  end
end
