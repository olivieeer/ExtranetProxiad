/**
 * Created by ocallens on 01/09/15.
 */

'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:personCtrl
 * @description
 * # personCtrl
 * Controller of the firstAppApp
 */
angular.module('firstAppApp')
    .controller('personCtrl', ['$scope', function($scope, $timeout) {

        $scope.firstName = "Olive",
        $scope.lastName = "Callens"
        $scope.myVar = false;
        $scope.toggle = function() {
            $scope.myVar = !$scope.myVar;
        }

        $scope.alerts = [
            //{ type: 'danger', msg: 'Oh Olive! Change a few things up and try submitting again.' },
            { type: 'success', msg: 'Well done Olive! You successfully read this important alert message.' }
        ];

        $scope.addAlert = function() {
            $scope.alerts.push({type: 'danger', msg: 'Another alert Olive!'});
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };


    }]);
