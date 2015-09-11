define(['resolver'], function (resolver) {
  'use strict';

  var module = angular.module('lnc', ['ngRoute']);

  module.config([
    '$controllerProvider',
    '$compileProvider',
    '$filterProvider',
    '$provide',
    '$routeProvider',
    function ($controllerProvider, $compileProvider, $filterProvider, $provide, $routeProvider) {

      angular.extend(module, {
        controller: $controllerProvider.register,
        directive: $compileProvider.directive,
        filter: $filterProvider.register,
        factory: $provide.factory,
        service: $provide.service
      });

      $routeProvider
        .when('/', {
          templateUrl: 'views/landing.html',
          resolve: resolver('LandingController')
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]);

  return module;
});
