describe('Controller: SearchQuickController', function () {

  // load the controller's module
  beforeEach(module('lnc'));

  var SearchQuickController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchQuickController = $controller('SearchQuickController', {
      $scope: scope
        // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SearchQuickController.awesomeThings.length).toBe(3);
  });
});
