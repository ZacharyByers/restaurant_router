class Api::RestaurantController < ApplicationController
  def show
    render json: Restaurant.first
  end
end
