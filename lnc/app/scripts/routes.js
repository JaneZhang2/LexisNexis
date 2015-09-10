define(function () {
  'use strict';

  return {
    defaultRoutePath: '/',
    routes: {
      '/': {
        templateUrl: '/views/home.html',
        dependencies: [
          'controllers/LandingController'
        ]
      },
      '/about/:person': {
        templateUrl: '/views/about.html',
        dependencies: [
          'controllers/AboutViewController',
          'directives/app-color'
        ]
      },
      '/contact': {
        templateUrl: '/views/contact.html',
        dependencies: [
          'controllers/ContactViewController'
        ]
      }
    }
  };
});
