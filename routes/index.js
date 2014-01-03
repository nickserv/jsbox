
/*
 * GET home page.
 */

var helpers = require('../helpers');

exports.index = function(req, res){
  res.render('index', {
    title: 'JS Box',
    libraries: helpers.getLibraries(),
    library: req.query.library
  });
};
