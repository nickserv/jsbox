
/*
 * GET home page.
 */

var libraries = require('../libraries.json').libraries;

var urlForLibrary = function (library, file, version) {
  return "//cdnjs.cloudflare.com/ajax/libs/" + library + "/" + version + "/" + file;
};

exports.index = function(req, res){
  res.render('index', {
    title: 'JS Box',
    libraryUrls: function () {
      return libraries.map(function (data) {
        return urlForLibrary(data.library, data.file, data.version);
      });
    }
  });
};
