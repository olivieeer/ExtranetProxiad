'use strict';

/**
 * @ngdoc directive
 * @name firstAppApp.directive:tooltip
 * @description
 * # tooltip
 */
angular.module('firstAppApp')
  .directive('tooltips', function () {
    return {
      restrict: 'A',
      link: function(scope, element ){
        $(element).hover(function(){
          // on mouseenter
          $(element).tooltip('show');
        }, function(){
          // on mouseleave
          $(element).tooltip('hide');
        });
      }
    };
  });
