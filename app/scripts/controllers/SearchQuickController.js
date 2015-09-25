angular.module('lnc')
  .controller('SearchQuickController', function ($scope) {
    $scope.content_types = [{
      id: 1,
      value: 'law,lawpic'
    }, {
      id: 2,
      value: 'national_standard'
    }, {
      id: 3,
      value: 'ep_news'
    }, {
      id: 4,
      value: 'case'
    }, {
      id: 5,
      value: 'commentary,dtt,journal,profNewsletter'
    }, {
      id: 6,
      value: 'contract,pgl_content'
    }, {
      id: 7,
      value: 'expert,ip_hottopic'
    }, {
      id: 8,
      value: 'newsletter'
    }, {
      id: 9,
      value: 'foreignlaw'
    }, {
      id: 0,
      value: 'all'
    }];

    $scope.keyword_scopes = [{
      id: 0,
      value: 'all'
    }, {
      id: 1,
      value: 'title'
    }];

    $scope.state = {
      keyword_scope: {
        id: 0
      },
      content_types: $scope.content_types
    };

    (function () {
      var state = $scope.state;

      $scope.$on('lncConnector', function (event, args) {
        event.stopPropagation();
        state.keyword = (state.keyword || '') + ' ' + args + ' ';
        $scope.$broadcast('lnc-keyword-focus');
      });
    })();

    (function () {

      $scope.$on('lnc-keyword-scope-list', function (event, args) {
        event.stopPropagation();

        $scope.state.keyword_scope = args;
      });

    })();

    (function () {
      var counter = 0,
        capacity = 9;

      $scope.$on('lnc-content-type', function (event, args) {
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
