angular.module('lnc')
  .directive('lncContentType', function () {
    return function (scope, element) {
      console.log('lncContentTypeChecked is coding...');
    };
  });
