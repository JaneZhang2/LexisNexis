define(function () {
  return angular.module('lnc', ['ui.router', 'oc.lazyLoad', 'pascalprecht.translate'])
    .config(function ($translateProvider) {
      $translateProvider.translations('en', {
        HEADLINE: 'Hello there, This is my awesome app!',
        INTRO_TEXT: 'And it has i18n support!'
      });
    })
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider) {

      $urlRouterProvider.when('/', '/quick')
        .otherwise('/');

      $stateProvider
        .state('quick', {
          url: '/quick',
          views: {
            'container': {
              controller: 'SearchQuickController', // This view will use AppCtrl loaded below in the resolve
              templateUrl: 'views/search/quick.html'
            }
          },
          resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
            templates: ['$q', '$injector', '$translate', function ($q, $injector, $translate) { //加载模板
              var deferred = $q.defer();

              $translate.use('en');

              require(['../views/search/quick'], function (provider) {
                $injector.invoke(provider); //http://docs.angularjs.cn/api/auto/service/$injector
                deferred.resolve();
              });

              return deferred.promise;
            }],
            components: ['$ocLazyLoad', function ($ocLazyLoad) { //加载组件
              return $ocLazyLoad.load([
                'controllers/SearchQuickController'
              ]);
            }]
          }
        });

      // Without server side support html5 must be disabled.
      $locationProvider.html5Mode(false);
    });
});
