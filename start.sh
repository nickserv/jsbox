# Starts the app, downloading the data file from cdnjs first. Note that if the
# download fails, you may need to restart this script manually.
curl http://cdnjs.com/packages.json > tmp/packages.json
node app
