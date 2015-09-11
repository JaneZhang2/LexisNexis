define(['loader'], function (loader) {
  'use strict';

  var module = angular.module('lnc', ['ngRoute']);

  module.config(
      [
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',

        function ($locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
          module.controller = $controllerProvider.register;
          module.directive = $compileProvider.directive;
          module.filter = $filterProvider.register;
          module.factory = $provide.factory;
          module.service = $provide.service;

          /*$locationProvider.html5Mode(true);*/
        }
      ])
    .config(
      [
        '$routeProvider',
        function ($routeProvider) {
          $routeProvider
            .when('/', {
              templateUrl: 'views/landing.html',
              resolve: loader(['controllers/LandingController'])
            })
            .otherwise({
              redirectTo: '/'
            });
        }
      ]);

  return module;
});
