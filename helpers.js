// helper functions

var http = require("http");
var libraries = require("./tmp/packages.json").packages;

exports.getLibraries = function () {
  return libraries.map(function (data) {
    return {
      name: data.name,
      url: "//cdnjs.cloudflare.com/ajax/libs/" + data.name + "/" + data.version + "/" + data.filename
    }
  });
};
