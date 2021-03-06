Rails.application.routes.draw do
  scope '/api' do
    scope '/v1' do
      post 'user_token' => 'user_token#create'
      get 'users/current' => 'users#current'
    end
  end

  namespace :api do
    namespace :v1 do
      resources :items
      resources :lists
    end
  end
end
