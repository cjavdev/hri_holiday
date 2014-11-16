class StaticPagesController < ApplicationController
  def root
    if logged_in?
      @current_email = current_user.email
    elsif params[:email]
      @current_email = params[:email]
    else
      @current_email = "northpole@happyholida.ys"
    end
  end

  def map
  end

  def globe
  end
end
