angular.module('lnc')
  .controller('SearchQuickController', function ($scope, content_types) {
    $scope.content_types = content_types;

    $scope.keyword_scopes = [{
      id: 0
    }, {
      id: 1
    }];

    $scope.record = {
      keyword_scope: {
        id: 0
      }
    };

    $scope.$on("keyword_scope", function (event, args) {
      event.stopPropagation();
      $scope.record.keyword_scope = args;
    });
  });
