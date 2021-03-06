define(['jquery-ui'], function () {
  return angular.module('lnc', ['ui.router', 'oc.lazyLoad', 'pascalprecht.translate'])
    .config(function ($translateProvider) {
      $translateProvider.translations('cn', {
          CONTENT_TYPES: '请选择内容类别',
          SEARCH: '智能搜索',
          SUBMIT: '提 交',
          CONTENT_TYPE_1: '政策法规',
          CONTENT_TYPE_2: '国家标准',
          CONTENT_TYPE_3: '新法快报',
          CONTENT_TYPE_4: '判决文书',
          CONTENT_TYPE_5: '专业期刊',
          CONTENT_TYPE_6: '实用资料',
          CONTENT_TYPE_7: '专家视点',
          CONTENT_TYPE_8: '电子杂志',
          CONTENT_TYPE_9: '外国法律',
          CONTENT_TYPE_0: '全库搜索',
          KEYWORD_SCOPE_0: '所有字段',
          KEYWORD_SCOPE_1: '仅标题',
          ANONYMOUS_KEY: '您可以使用双引号""做精确搜索'
        })
        .translations('en', {
          CONTENT_TYPES: 'Content types',
          SEARCH: 'Search',
          SUBMIT: 'Submit',
          CONTENT_TYPE_1: 'Legislation',
          CONTENT_TYPE_2: 'National standard',
          CONTENT_TYPE_3: 'Legal news',
          CONTENT_TYPE_4: 'Cases',
          CONTENT_TYPE_5: 'Newsletters',
          CONTENT_TYPE_6: 'Practical materials',
          CONTENT_TYPE_7: 'Expert analysis',
          CONTENT_TYPE_8: 'Lexis newsletters',
          CONTENT_TYPE_9: 'Foreign laws',
          CONTENT_TYPE_0: 'Search all',
          KEYWORD_SCOPE_0: 'All fields',
          KEYWORD_SCOPE_1: 'Title only',
          ANONYMOUS_KEY: ''
        });
    })
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider) {

      $urlRouterProvider.when('/', '/quick')
        .otherwise('/');

      $stateProvider
        .state('quick', {
          url: '/quick',
          views: {
            'container': {
              controller: 'SearchQuickController', // This view will use AppCtrl loaded below in the resolve
              templateUrl: 'views/search/quick.html'
            }
          },
          resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
            templates: ['$q', '$injector', '$translate', function ($q, $injector, $translate) { //加载模板
              var deferred = $q.defer();

              $translate.use('cn');

              require(['../views/search/quick'], function (provider) {
                $injector.invoke(provider); //http://docs.angularjs.cn/api/auto/service/$injector
                deferred.resolve();
              });

              return deferred.promise;
            }],
            components: ['$ocLazyLoad', function ($ocLazyLoad) { //加载组件
              return $ocLazyLoad.load([
                'controllers/SearchQuickController',
                'directives/lnc-feedback',
                'directives/lnc-content-type',
                'directives/lnc-keyword',
                'directives/lnc-select-list',
                'directives/lnc-submit',
                'directives/lnc-connector',
                'directives/lnc-helper',
                'directives/lnc-select-item'
              ]);
            }]
          }
        });

      // Without server side support html5 must be disabled.
      $locationProvider.html5Mode(false);
    });
});
