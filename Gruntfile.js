module.exports = function (grunt) {
  'use strict';

  require('jit-grunt')(grunt);

  var config = {
    lnc: {
      app: 'lnc/app',
      dist: 'lnc/dist',
      main: 'scripts/main-debug'
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
        files: [{
          expand: true,
          cwd: '<%= config.lnc.app %>',
          dest: '<%= config.lnc.dist %>',
          src: [
            'index.html',
            'views/*.html'
          ]
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      lnc: {
        src: '<%= config.lnc.dist %>/index.html',
        exclude: /^((?!requirejs).)*$/,
        fileTypes: {
          html: {
            block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
            detect: {
              js: /<script.*src=['"]([^'"]+)/gi
            },
            replace: {
              js: '<script src="{{filePath}}" data-main="<%= config.lnc.main %>"></script>'
            }
          }
        }
      }
    },

    concat: {
      lnc: {
        expand: true,
        cwd: '<%= config.lnc.app %>/scripts',
        src: ['main.js', 'config.js'],
        dest: '<%= config.lnc.dist %>/scripts',
        rename: function (dest) {
          return dest + '/' + 'main-debug.js';
        }
      }
    },

    requirejs: {
      lnc: {
        options: {
          appDir: 'lnc/app/scripts',
          baseUrl: './',
          mainConfigFile: '<%= config.lnc.app %>/scripts/config.js',
          dir: '<%= config.lnc.dist %>/scripts',
          skipDirOptimize: true,
          modules: [{
            name: 'main'
          }]
        }
      }
    },

    bowerRequirejs: {
      lnc: {
        rjsConfig: '<%= config.lnc.app %>/scripts/config.js',
        options: {
          exclude: 'requirejs'
        }
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      lnc: [
        'views',
        'scripts'
      ]
    }

  });

  grunt.registerTask('views', ['copy', 'wiredep']);
  grunt.registerTask('scripts', ['requirejs', 'concat']);
  grunt.registerTask('default', ['clean', 'concurrent']);
};
