angular.module('lnc')
  .controller('SearchQuickController', function ($scope) {
    $scope.content_types = [{
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }, {
      id: 4
    }, {
      id: 5
    }, {
      id: 6
    }, {
      id: 7
    }, {
      id: 8
    }, {
      id: 9
    }, {
      id: 0
    }];

    $scope.keyword_scopes = [{
      id: 0
    }, {
      id: 1
    }];

    $scope.state = {
      keyword_scope: {
        id: 0
      },
      content_types: $scope.content_types
    };

    $scope.$on("keyword_scope", function (event, args) {
      event.stopPropagation();
      $scope.state.keyword_scope = args;
    });

    (function () {
      var counter = 0,
        capacity = 9;

      $scope.$on('lnc-content-type-checkbox', function (event, args) {
        event.stopPropagation();

        var name = event.name,
          checked = args.checked;

        switch (args.id) {
          case 0:
            for (var i = 1; i <= capacity; i++) {
              $scope.$broadcast(name + '-' + i, checked);
            }
            counter = (checked ? capacity : 0);
            break;
          default:
            counter += (checked ? 1 : -1);
            $scope.$broadcast(name + '-0', counter === capacity);
            break;
        }
      });
    })();
  });
