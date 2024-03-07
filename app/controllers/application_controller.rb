class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    def handle_unverified_request
      redirect_to root_path, alert: "Your session has expired. Please log in again."
    end

    def login 
        redirect_to "https://www.google.com"
    end
end
