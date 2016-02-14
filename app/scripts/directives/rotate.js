'use strict';

/**
 * @ngdoc directive
 * @name firstAppApp.directive:rotate
 * @description
 * # rotate
 */
var rotate = angular.module('rotate',[]);
  rotate.directive('rotate', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the rotate directive');
      }
    };
  });
