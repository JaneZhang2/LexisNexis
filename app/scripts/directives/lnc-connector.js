define(function (click) {
  angular.module('lnc')
    .directive('lncConnector', function () {
      return function (scope, element, attrs) {
        element.on('click', function () {
          scope.$apply(function () {
            scope.$emit('lnc-connector', attrs.lncConnector);
          });
        });
      };
    });
});