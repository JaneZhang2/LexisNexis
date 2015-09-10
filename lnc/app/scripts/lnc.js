define(['routes', 'dependencyResolverFor'], function (config, dependencyResolverFor) {
  'use strict';

  var module = angular.module('lnc', ['ngRoute']);

  module.config(
    [
      '$routeProvider',
      '$locationProvider',
      '$controllerProvider',
      '$compileProvider',
      '$filterProvider',
      '$provide',

      function ($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
        module.controller = $controllerProvider.register;
        module.directive = $compileProvider.directive;
        module.filter = $filterProvider.register;
        module.factory = $provide.factory;
        module.service = $provide.service;

        /*$locationProvider.html5Mode(true);*/

        if (config.routes !== undefined) {
          angular.forEach(config.routes, function (route, path) {
            $routeProvider.when(path, {
              templateUrl: route.templateUrl,
              resolve: dependencyResolverFor(route.dependencies)
            });
          });
        }

        if (config.defaultRoutePaths !== undefined) {
          $routeProvider.otherwise({
            redirectTo: config.defaultRoutePaths
          });
        }
      }
    ]);

  return module;
});
