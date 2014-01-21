
/*
 * GET home page.
 */

var _ = require('underscore');
var helpers = require('../helpers');

exports.index = function(req, res){
  res.render('index', {
    title: 'JS Box',
    libraries: helpers.getLibraries(),
    activeLibraries: helpers.getActiveLibraries(req.query.libraries),
    isActiveLibrary: function (library, activeLibraries) {
      return _.contains(_.pluck(activeLibraries, 'name'), library.name);
    }
  });
};
