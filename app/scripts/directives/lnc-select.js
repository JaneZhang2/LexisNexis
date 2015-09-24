define([
  'handlers/mouseenter.select',
  'handlers/mouseleave.select'
], function (mouseenter, mouseleave) {
  angular.module('lnc')
    .directive('lncSelect', function () {
      return function (scope, element, attrs) {
        scope.flags = {};
        scope.event_name = attrs.lncSelect;

        element.on('mouseenter', function () {
            scope.$apply(mouseenter.bind(scope));
          })
          .on('mouseleave', function () {
            scope.$apply(mouseleave.bind(scope));
          });
      };
    });
});
