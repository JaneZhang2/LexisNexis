angular.module('lnc').controller('LandingController', [
  '$scope',
  'test',
  function ($scope, test) {
    'use strict';

    $scope.page = {
      heading: 'Welcome'
    };
  }
]);
