require 'sinatra'

Encoding.default_external = 'utf-8'

class App < Sinatra::Base

  # Home page
  get '/' do
    erb :index
  end

end
