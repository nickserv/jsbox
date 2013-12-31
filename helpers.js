// helper functions

var http = require("http");

exports.urlForLibrary = function (library, file, version) {
  return "//cdnjs.cloudflare.com/ajax/libs/" + library + "/" + version + "/" + file;
};

exports.libraryUrls = function (callback) {
  http.get("http://cdnjs.com/packages.json", function (res) {
    console.log("Downloading the cdnjs package list... (this might take a minute)");
    var data = "";

    res.on("data", function (chunk) {
      data += chunk;
    });

    res.on("end", function () {
      console.log("Done!");
      var libraries = JSON.parse(data).packages;
      var result = libraries.map(function (data) {
        return exports.urlForLibrary(data.name, data.filename, data.version);
      });
      callback(result);
    });
  });
};
