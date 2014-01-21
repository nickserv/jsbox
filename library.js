// Library helper functions

var _ = require("underscore");
// The JSON data provided by cdnjs
var libraries = require("./tmp/packages.json").packages;

// Returns a list of all the library data loaded into cdnjs. Library data is
// currently returned in an array of objects. Each library object has a name and
// a url (for the main file on cdnjs only). This data is generated through a map
// operation on the original cdnjs data.
exports.getLibraries = function () {
  return libraries.map(function (data) {
    return {
      name: data.name,
      url: "//cdnjs.cloudflare.com/ajax/libs/" + data.name + "/" + data.version + "/" + data.filename
    };
  });
};

// Returns a list data for all libraries with given names. If `names` is a
// string, an array with a single matching library (if there is one) is
// returned. If `names` is an array, libraries matching all each of the given
// names will be returned. Otherwise, nothing is returned. This will result in a
// subset of the output for what `getLibraries()` would return.
exports.getActiveLibraries = function (names) {
  switch(typeof names) {
  // Remember, arrays are objects!
  case "object":
    return _.filter(exports.getLibraries(), function (data) {
      return _.contains(names, data.name);
    });

  case "string":
    return new Array(_.findWhere(exports.getLibraries(), { name: names }));
  }
};
