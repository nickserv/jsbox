// helper functions

var http = require("http");
var packages = require("./tmp/packages.json").packages;

exports.urlForLibrary = function (library, file, version) {
  return "//cdnjs.cloudflare.com/ajax/libs/" + library + "/" + version + "/" + file;
};

exports.getLibraryUrls = function (callback) {
  var result = packages.map(function (data) {
    return {
      name: data.name,
      url: exports.urlForLibrary(data.name, data.filename, data.version)
    }
  });
  callback(result);
};
