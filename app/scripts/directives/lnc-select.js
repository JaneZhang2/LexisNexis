define([
  'handlers/mouseenter.select',
  'handlers/mouseleave.select'
], function () {
  angular.module('lnc')
    .directive('lncSelect', function () {
      return function () {
        console.log('lnc-select is coding...');
      };
    });
});
