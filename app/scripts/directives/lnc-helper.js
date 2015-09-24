define([
  'handlers/click.helper'
], function (click) {
  angular.module('lnc')
    .directive('lncHelper', function () {
      return function (scope, element, attrs) {
        element.on('click', function () {
          var $i = $('<div></div>'),
            config = {
              url: '/help/help.php?tab=hlp_searh_3.jpg',
              width: 700,
              height: 490
            };

          // switch (String(phpData.eng)) {
          //   case '1':
          //     $.extend(config, {
          //       url: '/help/help.php?tab=hlp_searh_4.jpg',
          //       width: 500,
          //       height: 350
          //     });
          //     break;
          // }

          $i.load(config.url, function () {
            var dialog = $i.dialog({
              width: config.width,
              height: config.height,
              close: function () {
                dialog.dialog('destroy');
              }
            });
          });

          return false;
        });
      };
    });
});
