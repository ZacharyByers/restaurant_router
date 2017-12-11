Rails.application.routes.draw do
  namespace :api do
    resources :restaurant, only: [:show]
    resources :menu_items, except: [:new, :edit]
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
