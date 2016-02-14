'use strict';

/**
 * @ngdoc filter
 * @name firstAppApp.filter:trusted
 * @function
 * @description
 * # trusted
 * Filter in the firstAppApp.
 */
var trusted = angular.module('trusted',[]);
  trusted.filter('trusted', ['$sce', function ($sce) {
      return function(url) {
        return $sce.trustAsResourceUrl(url);
      };
}]);
