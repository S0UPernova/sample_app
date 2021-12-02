Rails.application.routes.draw do
  # get 'password_resets/new'
  # get 'password_resets/edit'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'static_pages#home'
  # get 'static_pages/home'
  get '/help',      to: 'static_pages#help'
  get '/about',     to:'static_pages#about'
  get '/hello',     to:'application#hello'
  get '/contact',   to:'static_pages#contact'
  get '/signup',    to: 'users#new'
  get '/login',     to: 'sessions#new'
  post '/login',    to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :users
  resources :account_activations, only: [:edit]
  resources :password_resets, only: [:new, :create, :edit, :update]
end 