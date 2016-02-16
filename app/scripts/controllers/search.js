'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the firstAppApp
 */
angular.module('firstAppApp')
  .controller('SearchCtrl', function ($scope, $routeParams, serviceAjax) {
    $scope.query = $routeParams.query;
    $scope.currentPage = 1;
    $scope.totalPages = 0;
    $scope.loading = true;

    var loadMovies = function(){
      $scope.loading = true;
      serviceAjax.search($scope.query, $scope.currentPage).success(function(data){
        $scope.loading = false;
        $scope.movies = data.results;
        $scope.totalPages = data.total_pages;
      });
    };

    $scope.pageChanged = function(){
      loadMovies();
    };

    loadMovies();
  });
