define(function () {
  'use strict';

  return function (id) {
    var result = {};

    result[id] = ['$q', '$rootScope', function ($q, $rootScope) {
      var deferred = $q.defer();

      require(['controllers/' + id], function () {
        $rootScope.$apply(function () {
          deferred.resolve();
        });
      });

      return deferred.promise;
    }];

    return result;
  };
});
