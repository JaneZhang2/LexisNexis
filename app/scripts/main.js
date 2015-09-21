require.config({
  paths: {
    angular: '../../bower_components/angular/angular',
    'angular-route': '../../bower_components/angular-route/angular-route',
    jquery: '../../bower_components/jquery/dist/jquery',
    'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
    oclazyload: '../../bower_components/oclazyload/dist/ocLazyLoad.require',
    json2: '../../bower_components/json2/json2',
    json3: '../../bower_components/json3/lib/json3',
    'angular-translate': '../../bower_components/angular-translate/angular-translate'
  },
  shim: {
    angular: [
      'jquery',
      'json3'
    ],
    'modules/search': [
      'angular',
      'angular-ui-router',
      'oclazyload'
    ]
  },
  packages: [

  ]
});

require(['modules/search'], function () {
  angular.bootstrap(document, ['lnc']);
});
