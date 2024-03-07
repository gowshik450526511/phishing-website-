# app/controllers/home_controller.rb
class HomeController < ApplicationController
    def index
        
    end

    def login
        # For demonstration purposes, just logging the credentials
        puts "Hi gowshik"
        # format.js { render 'redirect_to_google' } # Respond with JavaScript
        redirect_to "https://www.google.com", allow_other_host: true
    end
  end
  