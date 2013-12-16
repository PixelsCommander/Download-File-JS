 module.exports = function(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
          options: {
              // the banner is inserted at the top of the output
              banner: '/*! <%= pkg.name %> v<%= pkg.version %> \n <%= pkg.author %> \n Article about: <%= pkg.articleURL %>*/\n'
          },
          dist: {
              files: {
                  'dist/download.min.js': ['src/download.js']
              }
          }
      }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', 'uglify');

};