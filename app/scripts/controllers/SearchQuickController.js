angular.module('lnc')
  .controller('SearchQuickController', function ($scope, content_types) {
    $scope.formData = {

    };
    $scope.content_types = content_types;
  });
