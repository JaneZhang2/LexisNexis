require.config({
  paths: {
    'angular': '../../../bower_components/angular/angular',
    'angular-route': '../../../bower_components/angular-route/angular-route',
    'jquery': '../../../bower_components/jquery/dist/jquery',
    'angular-ui-router': '../../../bower_components/angular-ui-router/release/angular-ui-router',
    'oclazyload': '../../../bower_components/oclazyload/dist/ocLazyLoad.require'
  },
  shim: {
    'angular': ['jquery'],
    'angular-ui-router': ['angular'],
    'oclazyload': ['angular'],
    'lnc': ['angular-ui-router', 'oclazyload']
  }
});

require(['lnc'], function () {
  'use strict';

  angular.bootstrap(document, ['lnc']);
});
