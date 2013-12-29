// helper functions

var libraries = require('./libraries.json').libraries;

exports.urlForLibrary = function (library, file, version) {
  return "//cdnjs.cloudflare.com/ajax/libs/" + library + "/" + version + "/" + file;
};

exports.libraryUrls = function () {
  return libraries.map(function (data) {
    return exports.urlForLibrary(data.library, data.file, data.version);
  });
};
