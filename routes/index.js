
/*
 * GET home page.
 */

var helpers = require('../helpers');

exports.index = function(req, res){
  helpers.getLibraryUrls(function (libraryUrls) {
    res.render('index', {
      title: 'JS Box',
      libraryUrls: libraryUrls
    });
  });
};
