define(function () {
  return angular.module('lnc', ['ui.router', 'oc.lazyLoad'])
    .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", "$ocLazyLoadProvider", function ($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider) {
      alert('test');
      $urlRouterProvider
        .when('/', function () {
          alert('xxx');
        })
        .otherwise(function ($injector, $location) {
          return '/search/quick';
        });
      // $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('index', {
          url: '/'
        });

      // Without server side support html5 must be disabled.
      $locationProvider.html5Mode(false);
    }])
    .run(function ($rootScope) {
      $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams) {
          alert('test');
          event.preventDefault();
          // transitionTo() promise will be rejected with 
          // a 'transition prevented' error
        });

      $rootScope.$on('$stateNotFound',
        function (event, unfoundState, fromState, fromParams) {
          alert('test');
          console.log(unfoundState.to); // "lazy.state"
          console.log(unfoundState.toParams); // {a:1, b:2}
          console.log(unfoundState.options); // {inherit:false} + default options
        });

      $rootScope.$on('$stateChangeError',
        function (event, toState, toParams, fromState, fromParams, error) {
          alert('test');
        });
    });
});
