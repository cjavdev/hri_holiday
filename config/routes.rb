Rails.application.routes.draw do
  root to: "static_pages#root"
  get "/m" => "static_pages#map"
  resources :wishes, defaults: { format: :json }
end
