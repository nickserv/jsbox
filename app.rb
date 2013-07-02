require 'sinatra'

Encoding.default_external = 'utf-8'

# Home page
get '/' do
  erb :index
end
