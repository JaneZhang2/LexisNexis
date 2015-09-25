define([
  'handlers/click.connector'
], function (click) {
  var name = 'lncConnector';

  angular.module('lnc')
    .directive(name, function () {
      return {
        scope: true,
        link: function (scope, element, attrs) {
          $.extend(scope, {
            name: name,
            value: attrs[name]
          });

          element.on('click', function () {
            scope.$apply(click.bind(scope));
          });
        }
      };
    });
});
