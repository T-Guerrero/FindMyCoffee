class Api::V1::GoogleStoresController < ApplicationController
  def index
    places = GetGoogleCoffeeListService.new(params[:latitude], params[:longitude]).call
    render json: places
  end

  def show
    place = GetGoogleCoffeeDetailsService.new(params[:id]).call
    render json: place
  end
end
