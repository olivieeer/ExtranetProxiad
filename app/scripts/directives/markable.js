'use strict';

/**
 * @ngdoc directive
 * @name firstAppApp.directive:markable
 * @description
 * # markable
 */
var markable = angular.module('markable',[]);
  markable.directive('markable', function () {
    return {
      link: function(scope, elem/*,attrs*/) {
        elem.on("click", function() {
          elem.addClass(" alert alert-info ");
        });
      }
  };
});
