define([
  'handlers/blur.keyword',
  'handlers/focus.keyword'
], function () {
  angular.module('lnc')
    .directive('lncKeyword', function () {
      return function () {
        console.log('lnc-keyword is coding...');
        //获得焦点：隐藏placeholder
        //***失去焦点：如果无内容，展示placeholder
      };
    });
});
