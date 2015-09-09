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

      // Automatically inject Bower components into the app
      wiredep: {
        lnc: {
          src: ['<%= config.lnc.app %>/index.html']
        }
      }

    });

    grunt.registerTask('default', ['wiredep']);
  };

})();
