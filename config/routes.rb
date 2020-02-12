Rails.application.routes.draw do
  root "kanbans#index"
  resources :kanbans, only: [:index]
end
