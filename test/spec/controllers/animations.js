'use strict';

describe('Controller: AnimationsCtrl', function () {

  // load the controller's module
  beforeEach(module('firstAppApp'));

  var AnimationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnimationsCtrl = $controller('AnimationsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AnimationsCtrl.awesomeThings.length).toBe(3);
  });
});
