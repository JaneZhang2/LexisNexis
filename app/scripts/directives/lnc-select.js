define([
  'handlers/mouseenter.select',
  'handlers/mouseleave.select'
], function (mouseenter, mouseleave) {
  angular.module('lnc')
    .directive('lncSelect', function () {
      return function (scope, element, attrs) {
        element.on('mouseenter', mouseenter)
          .on('mouseleave', mouseleave);
      };
    });
});
