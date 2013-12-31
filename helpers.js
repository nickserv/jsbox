// helper functions

var http = require("http");

exports.urlForLibrary = function (library, file, version) {
  return "//cdnjs.cloudflare.com/ajax/libs/" + library + "/" + version + "/" + file;
};

exports.libraryUrls = function (callback) {
  http.get("http://cdnjs.com/packages.json", function (res) {
    var data = "";
    var chunkNumber = 1;

    res.on("data", function (chunk) {
      data += chunk;
      console.log("chunk " + chunkNumber++);
    });

    res.on("end", function () {
      console.log("done");
      var libraries = JSON.parse(data).packages;
      var result = libraries.map(function (data) {
        return exports.urlForLibrary(data.name, data.filename, data.version);
      });
      callback(result);
    });
  });
};
