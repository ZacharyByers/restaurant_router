class Api::MenuItemsController < ApplicationController
  before_action :set_restaurant
  before_action :set_menu_item, except: [:index, :create]

  def index
    render json: @restaurant.menu_items.all
  end

  def show
    render json: @menu_item
  end

  def create
    menu_item = @restaurant.menu_items.new(menu_item_params)
    if menu_item.save
      render json: menu_item
    else
      render json: { errors: menu_item.errors.full_messages.join(', ') }, status: 422
    end
  end

  def update
    if @menu_item.update(menu_item_params)
      render json: @menu_item
    else
      render json: { errors: @menu_item.errors.full_messages.join(', ') }, status: 422
    end
  end

  def destroy
    @menu_item.destroy
  end

  private

  def menu_item_params
    params.require(:menu_item).permit(:name, :price, :description)
  end

  def set_menu_item
    @menu_item = @restaurant.menu_items.find(params[:id])
  end

  def set_restaurant
    @restaurant = Restaurant.last
  end
end
