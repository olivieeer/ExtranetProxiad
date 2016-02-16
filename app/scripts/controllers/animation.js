'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:AnimationCtrl
 * @description
 * # AnimationCtrl
 * Controller of the firstAppApp
 */

var animation = angular.module('animation', []);

animation.controller('AnimationCtrl', ['$scope',

  function ($scope) {

    $scope.today = new Date();
    $scope.types = [
      {name:'Congés payés', 'value': 1},
      {name:'Congés exceptionnels' , 'value': 2},
      {name:'RTT', 'value': 3},
      {name:'Congés sans solde', 'value': 4}
    ];

    $scope.nbJoursTravailles = 0;

    $scope.libelleClient = 'Auchan';

    $scope.send = function(){
      dataShare.sendData($scope.conges.motif);
    };

    $scope.go = function ( path ) {
      $scope.send();
      $location.path( path );
    };

  }]);


animation.controller('AnimationCtrl1',

  function ($scope) {

    $scope.debutMois = new Date(2015, 10, 1);
    $scope.types = [
      {name:'Congés payés', 'value': 1},
      {name:'Congés exceptionnels' , 'value': 2},
      {name:'RTT', 'value': 3},
      {name:'Congés sans solde', 'value': 4}
    ];
    $rootScope.libelle = "essai OLIVE";
    $scope.nbJoursTravailles = 0;

    $scope.libelleClient = 'Auchan';

    var x = Number(prompt("Entrez une valeur :"));
    var but = x * 3 - 1;
    but += 5;
    console.log(but);

    $scope.send = function(){
      dataShare.sendData($scope.conges.motif);
    };

    $scope.go = function ( path ) {
      $scope.send();
      $location.path( path );
    };

  });
