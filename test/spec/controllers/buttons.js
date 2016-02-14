'use strict';

describe('Controller: ButtonsCtrl', function () {

  // load the controller's module
  beforeEach(module('firstAppApp'));

  var ButtonsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ButtonsCtrl = $controller('ButtonsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ButtonsCtrl.awesomeThings.length).toBe(3);
  });
});
