/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    docco: {
      src: ['*.js', 'routes/**/*.js']
    },
    jshint: {
      // See .jshintrc
      src: ['*.js', 'routes/**/*.js'],
      options: {
        jshintrc: true
      }
    },
    watch: {
      files: '<%= jshint.src %>',
      tasks: ['jshint']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-docco');

  // Default task.
  grunt.registerTask('default', ['jshint']);

};
