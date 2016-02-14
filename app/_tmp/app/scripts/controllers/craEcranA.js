/**
 * Created by Olive on 23/10/2015.
 */

'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:CraCtrl
 * @description
 * # CraCtrl
 * Controller of the firstAppApp
 */

var craEcranAController = angular.module('craEcranAController', []);

craEcranAController.controller('CraEcranACtrl', ['$scope', '$location',
  function ($scope, $location) {

//angular.module('firstAppApp')
//  .controller('craEcranACtrl', ['$scope', function craEcranACtrl ($scope) {

    $scope.debutMois = new Date(2015, 10, 1);
    $scope.nbJoursTravailles = 0;

    $scope.go = function ( path ) {
      $location.path( path );
    };


  }]);
