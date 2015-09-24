angular.module('lnc')
  .controller('SearchQuickController', function ($scope, content_types) {
    $scope.content_types = content_types;

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

    (function () {
      var counter = 0,
        capacity = 9;

      $scope.$on('lnc.state.content_type', function (event, args) {
        event.stopPropagation();

        var name = event.name,
          checked = args.checked;

        switch (args.id) {
          case 0:
            for (var i = 1; i <= capacity; i++) {
              counter += (checked ? 1 : -1);
              $scope.$broadcast(name + '.' + i, checked);
            }
            break;
          default:
            counter += (checked ? 1 : -1);
            $scope.$broadcast(name + '.0', counter === capacity);
            break;
        }
      });
    })();
  });
