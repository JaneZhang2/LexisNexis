define(function () {
  'use strict';

  return angular.module('lnc', ['ui.router', 'oc.lazyLoad'])
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider) {
      $urlRouterProvider.otherwise('/');
      /*$locationProvider.hashPrefix('!');*/

      $stateProvider
        .state('/', {
          url: '/',
          views: {
            'lazyLoadView': {
              controller: 'LandingController', // This view will use AppCtrl loaded below in the resolve
              templateUrl: 'views/landing.html'
            }
          },
          resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
            loadMyCtrl: ['$q', '$ocLazyLoad', '$templateCache', function ($q, $ocLazyLoad, $templateCache) {
              var promises = [],
                deferred = $q.defer();
              require(['../views/landing'], function (template) {
                template($templateCache);
                deferred.resolve();
              });
              promises.push(deferred.promise);

              promises.push($ocLazyLoad.load([
                'scripts/controllers/LandingController.js'
              ]));

              return $q.all(promises);
            }]
          }
        });

      // Without server side support html5 must be disabled.
      $locationProvider.html5Mode(false);
    });
});
