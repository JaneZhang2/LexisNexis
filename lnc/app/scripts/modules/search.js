define(function () {
  return angular.module('lnc', ['ui.router', 'oc.lazyLoad'])
    .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", "$ocLazyLoadProvider", function ($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('quick', {
          url: '/quick',
          views: {
            'container': {
              controller: 'LandingController', // This view will use AppCtrl loaded below in the resolve
              templateUrl: 'views/landing.html'
            }
          },
          resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
            templates: ['$q', '$injector', function ($q, $injector) { //加载模板
              var deferred = $q.defer();

              require(['../views/landing'], function (provider) {
                $injector.invoke(provider); //http://docs.angularjs.cn/api/auto/service/$injector
                deferred.resolve();
              });

              return deferred.promise;
            }],
            components: ['$ocLazyLoad', function ($ocLazyLoad) { //加载组件
              return $ocLazyLoad.load([
                'controllers/LandingController',
                'services/test'
              ]);
            }]
          }
        });

      // Without server side support html5 must be disabled.
      $locationProvider.html5Mode(false);
    }]);
});
