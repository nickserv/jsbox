
/*
 * GET home page.
 */

var helpers = require('../helpers');

exports.index = function(req, res){
  helpers.libraryUrls(function (libraryUrls) {
    res.render('index', {
      title: 'JS Box',
      libraryUrls: libraryUrls
    });
  });
};
