Rails.application.routes.draw do
  resources :compensation_packages
  namespace :api do
    namespace :v1 do
      resources :contractors
    end
  end
end
