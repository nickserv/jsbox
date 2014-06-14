// Library helper functions

var _ = require("underscore");
var request = require("request");

var packagesURL = "http://api.cdnjs.com/libraries";

// Returns a list of all the library data loaded into cdnjs. Library data is
// currently returned in an array of objects. Each library object has a name and
// a url (for the main file on cdnjs only). This data is generated through a map
// operation on the original cdnjs data.
exports.getLibraries = function (callback) {
  request(packagesURL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).results);
    } else {
      callback([]);
    }
  });
};

// Returns a list data for all libraries with given names. If `names` is a
// string, an array with a single matching library (if there is one) is
// returned. If `names` is an array, libraries matching all each of the given
// names will be returned. Otherwise, nothing is returned. This will result in a
// subset of the output for what `getLibraries()` would return.
exports.getLibraries(function (libraries) {
  exports.getActiveLibraries = function (names) {
    switch(typeof names) {
    // Remember, arrays are objects!
    case "object":
      return _.filter(libraries, function (data) {
        return _.contains(names, data.name);
      });

    case "string":
      return new Array(_.findWhere(libraries, { name: names }));
    }
  };
});
