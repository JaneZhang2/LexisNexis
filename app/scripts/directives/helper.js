define([
  'handlers/helper/click'
], function () {
  angular.module('lnc')
    .directive('lncHelper', function () {
      return function () {
        console.log('lnc-helper is coding...');
      };
    });
});
