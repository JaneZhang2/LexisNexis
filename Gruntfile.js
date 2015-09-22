module.exports = function (grunt) {
  'use strict';

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
    ngtemplates: 'grunt-angular-templates'
  });

  var config = {
    app: 'app',
    dist: 'dist',
    main: 'scripts/main'
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
      lnc: '<%= config.dist %>'
    },

    // Copies remaining files to places other tasks can use
    copy: {
      lnc: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
            '*.html',
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
          '<%= config.dist %>/styles/main.css': '<%= config.app %>/styles/main.less'
        }
      }
    },
    cssmin: {
      lnc: {
        files: {
          '<%= config.dist %>/styles/main.css': '<%= config.dist %>/styles/main.css'
        }
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      lnc: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/scripts',
          src: '{,*/}*.js',
          dest: '<%= config.app %>/scripts'
        }]
      }
    },

    ngtemplates: {
      options: {
        module: 'lnc',
        bootstrap: function (module, script) {
          return 'define(function() { return [\'$templateCache\', function($templateCache){' + script + '}] });';
        }
      },
      landing: {
        cwd: '<%= config.app %>',
        src: [
          'views/toolbar.html',
          'views/landing.html',
          'views/footer.html'
        ],
        dest: '<%= config.dist %>/views/landing.js'
      },
      'search/quick': {
        cwd: '<%= config.app %>',
        src: [
          'views/search/quick.html'
        ],
        dest: '<%= config.dist %>/views/search/quick.js'
      }
    },

    bowerRequirejs: {
      lnc: {
        rjsConfig: '<%= config.app %>/scripts/main.js',
        options: {
          exclude: 'requirejs'
        }
      }
    },

    requirejs: {
      lnc: {
        options: {
          appDir: 'app/scripts',
          baseUrl: './',
          mainConfigFile: '<%= config.app %>/scripts/main.js',
          dir: '<%= config.dist %>/scripts',
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
        src: ['<%= config.dist %>/*.html'],
        // ignorePath: /(\.\.\/){2}/,
        exclude: /^((?!requirejs).)*$/,
        fileTypes: {
          html: {
            block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
            detect: {
              js: /<script.*src=['"]([^'"]+)/gi
            },
            replace: {
              js: '<script src="{{filePath}}" data-main="<%= config.main %>"></script>'
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
          '<%= config.dist %>/**/*.{css,js,html,png,jpg,jpeg,gif}'
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
              connect.static(config.dist)
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
