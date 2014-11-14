class WishesController < ApplicationController
  def index
    @wishes = Wish.all
    render :index
  end

  def show
    @wish = Wish.find(params[:id])
    render json: @wish
  end

  def create
    @cheer = Cheer.new(wish_params)

    if @cheer.save
      render json: @cheer
    else
      render json: @cheer.errors, status: :unprocessable_entity
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
    params.permit(
      :from_email,
      :to_email,
      :note,
      :accuracy,
      :altitude,
      :altitudeAccuracy,
      :heading,
      :latitude,
      :longitude,
      :speed
    )
  end
end
