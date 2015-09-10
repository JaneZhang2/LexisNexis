require.config({
  shim: {
    lnc: {
      deps: [
        'angular',
        'angular-route'
      ]
    },
    'angular-route': {
      deps: [
        'angular'
      ]
    }
  },
  paths: {
    angular: "../../../bower_components/angular/angular",
    "angular-route": "../../../bower_components/angular-route/angular-route",
    jquery: "../../../bower_components/jquery/dist/jquery"
  },
  packages: [

  ]
});
