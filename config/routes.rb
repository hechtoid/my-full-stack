Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :artists, only: [:index, :show, :create]
    resources :songs, only: [:index, :show]
  end
 
 
 
  root to: "static_pages#root"

  # namepsace :api
end
