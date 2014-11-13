class WishesController < ApplicationController
  before_action :authenticate_user!

  def index
    @wishes = current_user.wishes
    render json: @wishes
  end

  def show
    @wish = current_user.wishes.find(params[:id])
    render json: @wish
  end

  def create
    @wish = current_user.wishes.new(wish_params)

    if @wish.save
      render json: @wish
    else
      render json: @wish.errors.full_messages, status: :unprocessable_entity
    end
  end

  def edit
    @wish = current_user.wishes.find(params[:id])
  end

  def update
    @wish = current_user.wishes.find(params[:id])

    if @wish.update(wish_params)
      render json: @wish
    else
      render json: @wish.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @wish = current_user.wishes.find(params[:id])
    @wish.try(:destroy)
    render json: {}
  end

  private

  def wish_params
    params.require(:wish).permit(:to_email, :note)
  end
end
