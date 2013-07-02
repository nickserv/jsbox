# Set up app
require './app'

# Set up middleware
use Rack::Deflater

# Run app
run App
