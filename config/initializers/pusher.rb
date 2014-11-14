require 'pusher'

Pusher.url = "http://#{ ENV['pusher_key'] }:#{ ENV['pusher_secret'] }@api.pusherapp.com/apps/#{ ENV['pusher_id'] }"
Pusher.logger = Rails.logger

# class HelloWorldController < ApplicationController
#   def hello_world
#     Pusher['test_channel'].trigger('my_event', {
#       message: 'hello world'
#     })
#   end
# end
