module.exports = function (grunt) {
  'use strict';

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
    ngtemplates: 'grunt-angular-templates'
  });

  var config = {
    lnc: {
      app: 'lnc/app',
      dist: 'lnc/dist',
      main: 'scripts/main'
    }
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    // Empties folders to start fresh
    clean: {
      options: {
        force: true
      },
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
            'images/{,*/}*.{png,jpg,jpeg,gif}'
          ]
        }]
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    less: {
      lnc: {
        files: {
          '<%= config.lnc.dist %>/styles/main.css': '<%= config.lnc.app %>/styles/main.less'
        }
      }
    },
    cssmin: {
      lnc: {
        files: {
          '<%= config.lnc.dist %>/styles/main.css': '<%= config.lnc.dist %>/styles/main.css'
        }
      }
    },

    concat: {
      lnc: {
        expand: true,
        cwd: '<%= config.lnc.app %>/scripts',
        src: ['main.js'],
        dest: '<%= config.lnc.dist %>/scripts'
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      lnc: {
        files: [{
          expand: true,
          cwd: '<%= config.lnc.app %>/scripts',
          src: '{,*/}*.js',
          dest: '<%= config.lnc.dist %>/scripts'
        }]
      }
    },

    ngtemplates: {
      landing: {
        cwd: '<%= config.lnc.app %>',
        src: 'views/landing.html',
        dest: '<%= config.lnc.dist %>/views/landing.js',
        options: {
          module: 'lnc',
          bootstrap: function (module, script) {
            return 'define(function() { return [\'$templateCache\', function($templateCache){' + script + '}] });';
          }
        }
      }
    },

    bowerRequirejs: {
      lnc: {
        rjsConfig: '<%= config.lnc.app %>/scripts/main.js',
        options: {
          exclude: 'requirejs'
        }
      }
    },

    requirejs: {
      lnc: {
        options: {
          appDir: 'lnc/app/scripts',
          baseUrl: './',
          mainConfigFile: '<%= config.lnc.app %>/scripts/main.js',
          dir: '<%= config.lnc.dist %>/scripts',
          skipDirOptimize: true,
          modules: [{
            name: 'main'
          }]
        }
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      lnc: {
        src: '<%= config.lnc.dist %>/index.html',
        ignorePath: /(\.\.\/){2}/,
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

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      lnc: [
        'styles',
        'views',
        'scripts'
      ]
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      lnc: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.lnc.dist %>/**/*.{css,js,html,png,jpg,jpeg,gif}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729,
        open: true
      },
      lnc: {
        options: {

          middleware: function (connect) {
            return [
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(config.lnc.dist)
            ];
          }
        }
      }
    }

  });

  grunt.registerTask('serve', ['connect', 'watch']);
  grunt.registerTask('styles', ['less', 'cssmin']);
  grunt.registerTask('views', ['copy', 'wiredep', 'ngtemplates']);
  grunt.registerTask('scripts', ['ngAnnotate', 'requirejs']);
  grunt.registerTask('default', ['clean', 'concurrent']);
};
