/**
 * Created by Olive on 29/08/2015.
 */


angular.module('firstAppApp')
  .directive('nombreJours', function () {
    return function($scope, element, attrs) {
      var today = new Date();
      if ($scope.conges.dateDebut < today){
        alert("zut");
        $scope.addAlert
      }
      element.bind("mouseenter", function() {
        element.css("background-color", "blue");
      });
      element.bind("mouseleave", function() {
        element.css("background", "none");
      });
    };
  });

