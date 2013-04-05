 module.exports = function(grunt) {
  grunt.initConfig({
    meta: {
      version: '1.0',
      banner: '/*! DownloadJS - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://pixelscommander.com/downloadjs/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Denis Radin Licensed MIT */'
    },
    min: {
        downloadjs: {
        src: ['./download.js'],
        dest: '../lib/download.min.js'
      }
    }
  });

  grunt.registerTask('default', 'min:downloadjs');

};