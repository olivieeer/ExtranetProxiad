'use strict';

/**
 * @ngdoc service
 * @name firstAppApp.dataShare
 * @description
 * # dataShare
 * Factory in the firstAppApp.
 */

var datashare = angular.module('datashare',[]);
  datashare.factory('dataShare', function ( $rootScope ) {
    var service = {};
    service.data = false;
    service.sendData = function(data){
      this.data = data;
      $rootScope.$broadcast('data_shared');
    };
    service.getData = function(){
      return this.data;
    };
    return service;
  });
