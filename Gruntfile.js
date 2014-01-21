/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
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

  // Default task.
  grunt.registerTask('default', ['jshint']);

};
