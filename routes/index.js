
/*
 * GET home page.
 */

var helpers = require('../helpers');

exports.index = function(req, res){
  res.render('index', {
    title: 'JS Box',
    libraries: helpers.getLibraries(),
    activeLibrary: helpers.getActiveLibrary(req.query.library)
  });
};
