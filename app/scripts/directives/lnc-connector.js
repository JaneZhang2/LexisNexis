define([
  'handlers/click.connector'
], function (click) {
  angular.module('lnc')
    .directive('lncConnector', function () {
      return function (scope, element, attrs) {
        element.on('click', click);
      };
    });
});
