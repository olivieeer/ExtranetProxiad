'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:PopularCtrl
 * @description
 * # PopularCtrl
 * Controller of the firstAppApp
 */

var app = angular.module('firstAppApp', ['angularModalService', 'ngAnimate']);

app.controller('SampleController', ['$scope', 'ModalService', function($scope, ModalService) {

  $scope.yesNoResult = null;
  $scope.complexResult = null;
  $scope.customResult = null;

  $scope.showYesNo = function() {

    ModalService.showModal({
      templateUrl: "yesno/yesno.html",
      controller: "YesNoController"
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        $scope.yesNoResult = result ? "You said Yes" : "You said No";
      });
    });

  };

  $scope.showComplex = function() {

    ModalService.showModal({
      templateUrl: "complex/complex.html",
      controller: "ComplexController",
      inputs: {
        title: "A More Complex Example"
      }
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
      });
    });

  };

  $scope.showCustom = function() {

    ModalService.showModal({
      templateUrl: "custom/custom.html",
      controller: "CustomController"
    }).then(function(modal) {
      modal.close.then(function(result) {
        $scope.customResult = "All good!";
      });
    });

  };

}]);
