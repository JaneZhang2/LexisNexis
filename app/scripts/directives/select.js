define([
  'handlers/select/mouseenter',
  'handlers/select/mouseleave'
], function () {
  angular.module('lnc')
    .directive('lncSelect', function () {
      return function () {
        console.log('lnc-select is coding...');
      };
    });
});
