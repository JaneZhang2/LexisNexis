define([
  'handlers/checked.content_type'
], function (checked) {
  angular.module('lnc')
    .directive('lncContentTypeItem', function () {
      return function (scope, element) {
        scope.$on('lnc.state.content_type.' + scope.item.id, function (event, args) {
          scope.item.checked = args;
        });

        element.on('click', function () {
          scope.$apply(checked.bind(scope));
        });
      };
    });
});
