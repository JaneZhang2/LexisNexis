define(['lnc'], function (lnc) {
  'use strict';

  lnc.controller('LandingController', [
    '$scope',

    function ($scope) {
      $scope.page = {
        heading: 'Welcome'
      };
    }
  ]);
});
