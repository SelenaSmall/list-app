Rails.application.routes.draw do
  scope '/api' do
    post 'user_token' => 'user_token#create'
  end

  namespace :api do
    namespace :v1 do
      resources :items
      resources :lists
    end
  end
end
