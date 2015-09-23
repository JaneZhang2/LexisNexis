define([
  'handlers/click.submit'
], function (click) {
  angular.module('lnc')
    .directive('lncSubmit', function () {
      return function (scope, element, attrs) {
        element.on('click', click);
      };
    });
});
