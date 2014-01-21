
/*
 * GET API results.
 */

var helpers = require('../helpers');

exports.index = function(req, res){
  var activeLibraries = helpers.getActiveLibraries(req.query.libraries);
  res.send(activeLibraries || helpers.getLibraries());
};
