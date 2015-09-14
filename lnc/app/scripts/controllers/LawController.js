angular.module('lnc').controller('LawController', [
  '$scope',
  'test',
  function ($scope, test) {
    'use strict';

    $scope.page = {
      heading: 'Welcome'
    };
  }
]);
