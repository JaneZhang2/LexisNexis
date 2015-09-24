define([
  'handlers/selected.select'
], function (click, mouseleave) {
  angular.module('lnc')
    .directive('lncSelectItem', function () {
      return function (scope, element) {
        element.on('click', function () {
          scope.$apply(click.bind(scope));
        });
      };
    });
});
