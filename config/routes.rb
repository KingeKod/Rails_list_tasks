Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'tasks#index'
  post '/' => 'tasks#create'
  #put 'update' => 'tasks#update'
  #put 'new' => 'tasks#new'
  
  #get 'create' => 'new_tasks#update'
  resources :tasks
end
