'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:CraCtrl
 * @description
 * # CraCtrl
 * Controller of the firstAppApp
 */

var suggestionsController = angular.module('suggestionsController', []);

suggestionsController.controller('SuggestionsCtrl', ['$scope',
  function ($scope) {

        $scope.todolist = [ {"name":"Travailler moins"}, {"name":"gagner plus"}, {"name" :"la retraite à 45 ans"}];
        $scope.imageSrc = "images/remove.png";

				 $scope.names = ['morpheus', 'neo', 'trinity'];
    $scope.suggestions = ["viralpatel.net@gmail.com", "hello@email.com"];
    
    $scope.add = function() {
        $scope.suggestions.push($scope.newsuggestion);
		$scope.newsuggestion = "";
    }
		
		 $scope.remove = function() {
        $scope.suggestions.slice($scope.newsuggestion,1);
		$scope.newsuggestion = "";
    }


}]);