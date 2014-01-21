
/*
 * GET API results.
 */

var helpers = require('../helpers');

// Provides a simple API for retrieving library information at `/api.json`. The
// library JSON is based on the data provided by cdnjs, but JS Box removes most
// fields and adds some extra app-specific data.
//
// If the `libraries` parameter is empty, all libraries that can be used with JS
// Box are returned. Otherwise, only libraries with names specified in the
// `libraries` parameter are returned. Libraries that do not exist are ignored,
// and any number of libraries may be specified.
exports.index = function(req, res){
  var activeLibraries = helpers.getActiveLibraries(req.query.libraries);
  res.send(activeLibraries || helpers.getLibraries());
};
