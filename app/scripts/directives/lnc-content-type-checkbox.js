define([
  'handlers/click.checkbox'
], function (click) {
  angular.module('lnc')
    .directive('lncContentTypeCheckbox', function () {
      return function (scope, element) {
        var id = 'lnc-content-type-checkbox',
          item = scope.item;

        scope.id = id;

        scope.$on(id + '-' + item.id, function (event, args) {
          item.checked = args;
        });

        element.on('click', function () {
          scope.$apply(click.bind(scope));
        });
      };
    });
});
