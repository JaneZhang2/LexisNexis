require.config({
  paths: {
    angular: '../../bower_components/angular/angular',
    'angular-route': '../../bower_components/angular-route/angular-route',
    jquery: '../../bower_components/jquery/dist/jquery',
    'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
    oclazyload: '../../bower_components/oclazyload/dist/ocLazyLoad.require',
    json2: '../../bower_components/json2/json2',
    json3: '../../bower_components/json3/lib/json3',
    'angular-translate': '../../bower_components/angular-translate/angular-translate',
    'angular-gettext': '../../bower_components/angular-gettext/dist/angular-gettext',
    'jquery-ui': '../../bower_components/jquery-ui/jquery-ui',
    angularAMD: '../../bower_components/angularAMD/angularAMD',
    'ui-router-extras': '../../bower_components/ui-router-extras/release/ct-ui-router-extras'
  },
  shim: {
    angular: [
      'jquery',
      'json3'
    ],
    'angular-ui-router': [
      'angular'
    ],
    'angular-translate': [
      'angular'
    ],
    oclazyload: [
      'angular'
    ],
    'modules/search': [
      'jquery',
      'jquery-ui',
      'angular',
      'angular-ui-router',
      'angular-translate',
      'oclazyload'
    ]
  },
  packages: [

  ]
});

require(['modules/search'], function () {
  angular.bootstrap(document, ['lnc']);
});
