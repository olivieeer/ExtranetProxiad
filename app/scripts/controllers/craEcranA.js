'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:CraCtrl
 * @description
 * # CraCtrl
 * Controller of the firstAppApp
 */

var craEcranA = angular.module('craEcranA', []);

craEcranA.controller('CraEcranACtrl', ['$scope', '$location',
  function ($scope, $location) {

    $scope.today = new Date();
		$scope.debutMois = new Date($scope.today.getYear(),$scopetoday.getMonth(), 1);
    $scope.types = [
      {name:'Congés payés', 'value': 1},
      {name:'Congés exceptionnels' , 'value': 2},
      {name:'RTT', 'value': 3},
      {name:'Congés sans solde', 'value': 4}
    ];
		$scope.conges = {};
    //$rootScope.libelle = "essai OLIVE";
    $scope.nbJoursTravailles = 0;

    $scope.libelleClient = 'Auchan';

    //var x = Number(prompt("Entrez une valeur :"));
    //var but = x * 3 - 1;
    //but += 5;
    //console.log(but);

    $scope.send = function(){
      dataShare.sendData($scope.conges.motif);
    };

    $scope.go = function ( path ) {
      $scope.send();
      $location.path( path );
    };

		 $scope.save = function() {
      var formData = $scope.congesForm;
    };
		
  }]);
