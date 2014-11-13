class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_user
    return nil unless params[:ginger_bread_man]
    @current_user ||= User.find_by(auth_token: params[:ginger_bread_man])
  end

  def logged_in?
    !!current_user
  end
end
