define([
  'handlers/connector/click'
], function () {
  angular.module('lnc')
    .directive('lncConnector', function () {
      return function () {
        console.log('lnc-connector is coding...');
      };
    });
});
