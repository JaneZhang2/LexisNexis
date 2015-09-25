define([
  'handlers/click.feedback'
], function (click) {
  angular.module('lnc')
    .directive('lncFeedback', function () {
      return function (scope, element, attrs) {
        element.on('click', function () {
          scope.$apply(click.bind(scope));
        });
      };
    });
});
