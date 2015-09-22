angular.module('lnc')
  .controller('SearchQuickController', function (content_types, $scope) {
    // status:
    // 0:无；
    // 1：selected；

    // $scope.content_types = {
    //   'LEGISLATION': true,
    //   'NATION_STANDARD': false,
    //   'LEGAL_NEWS': false,
    //   'CASES': false,
    //   'NEWSLETTERS': false,
    //   'PRACTICAL_MATERICAL': false,
    //   'EXPERT_ANALYSIS': false,
    //   'LEXIS_NEWSLETTERS': false,
    //   'FOREIGN_LAWS': false,
    //   'SEARCH_ALL': false
    // };

    $scope.content_types = content_types;
  });
