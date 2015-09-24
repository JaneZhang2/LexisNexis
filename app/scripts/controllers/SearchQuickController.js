angular.module('lnc')
  .controller('SearchQuickController', function ($scope, content_types) {
    $scope.content_types = content_types;
    $scope.count = 0;
    // $scope.count = content_types.length - 1;

    $scope.keyword_scopes = [{
      id: 0
    }, {
      id: 1
    }];

    $scope.state = {
      keyword_scope: {
        id: 0
      },
      content_types: content_types
    };

    $scope.$on("keyword_scope", function (event, args) {
      event.stopPropagation();
      $scope.state.keyword_scope = args;
    });

    $scope.$on('lnc.state.content_type', function (event, args) {
      event.stopPropagation();
      switch (args.id) {
        case 0:
          for (var i = 1; i < 10; i++) {
            $scope.$broadcast(event.name + '.' + i, args.checked);
          }
          $scope.count = (args.checked ? 9 : 0);
          break;
        default:
          if (args.checked) {
            if (++$scope.count === 9) {
              $scope.$broadcast(event.name + '.0', true);
            }
          } else {
            $scope.count--;
            $scope.$broadcast(event.name + '.0', args.checked);
          }
          // if (!args.checked) {
          //   $scope.$broadcast(event.name + '.0', args.checked);
          // } else if ($scope.count === 9) {
          //   $scope.$broadcast(event.name + '.0', true);
          // }
          break;
      }
    });
  });
