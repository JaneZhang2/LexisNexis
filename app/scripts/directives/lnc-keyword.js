define([
  'handlers/blur.keyword',
  'handlers/focus.keyword'
], function (blur, focus) {
  angular.module('lnc')
    .directive('lncKeyword', function () {
      return {
        scope: true,
        link: function (scope, element, attrs) {
          scope.flags = {};

          element.on('blur', function () {
              scope.$apply(blur.bind(scope));
            })
            .on('focus', function () {
              scope.$apply(focus.bind(scope));
            });
        }
      };
    });
});
