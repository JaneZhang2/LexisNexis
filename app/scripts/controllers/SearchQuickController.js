angular.module('lnc')
  .controller('SearchQuickController', function ($scope, content_types) {
    $scope.content_types = content_types;
  });
