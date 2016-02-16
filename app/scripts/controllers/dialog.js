'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:CraCtrl
 * @description
 * # CraCtrl
 * Controller of the firstAppApp
 */
var dialogController = angular.module('dialogController', []);

dialogController.controller('DialogCtrl', ['$scope', '$modal',
  function ($scope, $modal) {

    $scope.open = function(){
      console.log('DialogCtrl - opened');
      var modalInstance = $modal.open({
        templateUrl: 'views/myModalContent.html',
        //controller: ModalInstanceCtrl,
        controller: 'DialogCtrl',
        backdrop: true,
        keyboard: true,
        backdropClick: true,
        size: 'lg',
        resolve: {
          data: function () {
            return $scope.data;
          }
        }
      });


      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        //$log.info('Modal dismissed at: ' + new Date());
        console.log('Modal dismissed at: ' + new Date());
      });
    }

    $scope.close = function(){
      //$modal.close();
    }

 }]);

