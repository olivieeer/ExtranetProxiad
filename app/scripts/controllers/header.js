'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the firstAppApp
 */
var header = angular.module('header', []);
  header.controller('HeaderCtrl', function ($scope, $location) {
    $scope.query = ""
    $scope.searchAction = function(){
      $location.path("/search/" + $scope.query);
    }
  });
