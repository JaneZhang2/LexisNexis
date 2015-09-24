define([
  'handlers/mouseenter.select',
  'handlers/mouseleave.select'
], function (mouseenter, mouseleave) {
  angular.module('lnc')
    .directive('lncSelectList', function () {
      return function (scope, element, attrs) {
        scope.flags = {};
        scope.id = 'lnc-' + attrs.lncSelectList + '-list';

        element.on('mouseenter', function () {
            scope.$apply(mouseenter.bind(scope));
          })
          .on('mouseleave', function () {
            scope.$apply(mouseleave.bind(scope));
          });
      };
    });
});
