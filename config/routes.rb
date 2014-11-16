Rails.application.routes.draw do
  root to: "static_pages#root"
  get "/m" => "static_pages#map"
  get "/b" => "static_pages#beta"
  get "/g" => "static_pages#globe"

  resources :wishes, defaults: { format: :json }
end
