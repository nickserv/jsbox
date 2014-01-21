
/*
 * GET home page.
 */

var _ = require('underscore');
var library = require('../library');

// Lets users choose libraries to load. The page also loads the appropriate
// JavaScript libraries (by name) through the `libraries` parameter.
exports.index = function(req, res){
  res.render('index', {
    title: 'JS Box',

    // TODO: Try to figure out how to define the following local variables and
    // functions elsewhere
    libraries: library.getLibraries(),
    activeLibraries: library.getActiveLibraries(req.query.libraries),
    // Returns true iff `library`'s name is also included in one of the objects
    // in the `activeLibraries` array
    isActiveLibrary: function (library, activeLibraries) {
      return _.contains(_.pluck(activeLibraries, 'name'), library.name);
    }
  });
};
