'use strict';

/**
 * @ngdoc directive
 * @name firstAppApp.directive:myDirective
 * @description
 * # myDirective
 */
var myDirective = angular.module('myDirective',[]);
  myDirective.directive('myDirective', function () {
    return {
      template: '<div class="alert-success"></div>',
      restrict: 'EA',
      link: function postLink(scope, element  /*,attrs*/) {
        element.text(' directive');
      }
    };
  });
