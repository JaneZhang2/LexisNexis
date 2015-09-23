define([
  'handlers/click.helper'
], function (click) {
  angular.module('lnc')
    .directive('lncHelper', function () {
      return function (scope, element, attrs) {
        element.on('click', click);
      };
    });
});
