class WishesController < ApplicationController
  def index
    @wishes = Wish.all
    render json: @wishes
  end

  def show
    @wish = Wish.find(params[:id])
    render json: @wish
  end

  def create
    @wish = Wish.new(wish_params)
    WishMailer.holiday_cheer(@wish).deliver

    if @wish.save
      render json: @wish
    else
      render json: @wish.errors.full_messages, status: :unprocessable_entity
    end
  end

  def edit
    @wish = Wish.find(params[:id])
  end

  def update
    @wish = Wish.find(params[:id])

    if @wish.update(wish_params)
      render json: @wish
    else
      render json: @wish.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @wish = Wish.find(params[:id])
    @wish.try(:destroy)
    render json: {}
  end

  private

  def wish_params
    params.require(:wish).permit(:from_email, :to_email, :note)
  end
end
