(function () {
  'use strict';

  module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    var config = {
      lnc: {
        app: 'lnc/app',
        dist: 'lnc/dist'
      }
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

      // Project settings
      config: config,

      // Empties folders to start fresh
      clean: {
        lnc: '<%= config.lnc.dist %>'
      },

      // Copies remaining files to places other tasks can use
      copy: {
        lnc: {
          files: {
            '<%= config.lnc.dist %>/index.html': '<%= config.lnc.app %>/index.html'
          }
        }
      },

      // Automatically inject Bower components into the app
      wiredep: {
        lnc: {
          src: ['<%= config.lnc.dist %>/index.html']
        }
      }

    });

    grunt.registerTask('default', ['clean', 'copy', 'wiredep']);
  };

})();
