'use strict';

/**
 * @ngdoc directive
 * @name firstAppApp.directive:shakeThat
 * @description
 * # shakeThat
 */
var shakeThat = angular.module('shakeThat',[]);
  shakeThat.directive('shakeThat', ['$animate', function($animate) {
    return {
         scope: {
    },		
        link: function(scope, element, attrs, form) {
      // listen on submit event
      element.on('click', function() {
        // tell angular to update scope
        scope.$apply(function() {
          $animate.addClass(element, 'shake', function() {
            $animate.removeClass(element, 'shake');
          });
        });
      });
    }
    };
  }]);
