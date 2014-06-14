var express = require('express');
var router = express.Router();

var library = require('../library');

/* GET home page. */
// Lets users choose libraries to load. The page also loads the appropriate
// JavaScript libraries (by name) through the `libraries` parameter.
router.get('/', function(req, res) {
  res.render('box', {
    title: 'JS Box',

    // TODO: Try to figure out how to define the following local variables and
    // functions elsewhere
    activeLibraries: library.getActiveLibraries(req.query.libraries)
  });
});

module.exports = router;
