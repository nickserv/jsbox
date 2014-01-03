// helper functions

var _ = require("underscore");
var libraries = require("./tmp/packages.json").packages;

exports.getLibraries = function () {
  return libraries.map(function (data) {
    return {
      name: data.name,
      url: "//cdnjs.cloudflare.com/ajax/libs/" + data.name + "/" + data.version + "/" + data.filename
    }
  });
};

exports.getActiveLibrary = function (name) {
  return _.findWhere(exports.getLibraries(), { name: name });
};
