Rails.application.routes.draw do

  # setup for sidekiq and sidekiq cron
  require 'sidekiq/web'
  require 'sidekiq/cron/web'
  mount Sidekiq::Web => '/sidekiq'

  # This is where react is going to work
  root 'pages#index'

  namespace :api do
    namespace :v1 do

      resources :posts, param: :slug
      resources :authors, param: :slug, only: [:index, :show]
      resources :newsletters, only: [:create]
      resources :messages, only: [:index, :create]

      match "/post/attachment/:slug", to: "posts#attachment", via: :patch
    end
  end

  mount ActionCable.server => '/cable'

  get '*path', to: 'pages#index', via: :all

end