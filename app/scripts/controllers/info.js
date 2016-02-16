'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the firstAppApp
 */
var info = angular.module('info', []);
  info.controller('InfoCtrl', function ($scope, $routeParams, serviceAjax) {
    var id = $routeParams.id;
    $scope.loading = true;
    serviceAjax.info(id).success(function(data){
      $scope.loading = false;
      $scope.movie = data;
    })
  });
