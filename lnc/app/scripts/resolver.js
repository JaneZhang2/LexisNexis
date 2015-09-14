define(function () {
  'use strict';

  return function (id) {
    var result = {};

    alert('test2');

    result[id] = ['$q', '$rootScope', function ($q, $rootScope) {
      var deferred = $q.defer();

      require(['controllers/' + id], function () {
        $rootScope.$apply(function () {
          deferred.resolve();
        });
      });

      return deferred.promise;
    }];



    result.template = ['$q', '$rootScope', '$templateCache', '$route', function ($q, $rootScope, $templateCache, $route) {
      var deferred = $q.defer();

      require(['template'], function (template) {
        $rootScope.$apply(function () {
          template($templateCache);
          $route.current.templateUrl = 'views/law.html';
          deferred.resolve();
        });
      });

      return deferred.promise;
    }];

    /*result.template = ['$templateCache', function ($templateCache) {

      $templateCache.put('views/landing.html',
        "<section ng-controller=\"LandingController\">\r" +
        "\n" +
        "  <h1>{{page.heading}}</h1>\r" +
        "\n" +
        "  <p>This is the homepage...</p>\r" +
        "\n" +
        "</section>\r" +
        "\n"
      );

    }];*/

    return result;
  };
});
