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

exports.getActiveLibraries = function (names) {
  switch(typeof names) {
  // remember, arrays are objects!
  case "object":
    return _.filter(exports.getLibraries(), function (data) {
      return _.contains(names, data.name);
    });

  case "string":
    return new Array(_.findWhere(exports.getLibraries(), { name: names }));
  }
};
