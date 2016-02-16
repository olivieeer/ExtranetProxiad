'use strict';

/**
 * @ngdoc directive
 * @name firstAppApp.directive:fluidvids
 * @description
 * # fluidvids
 */
var fluidvids = angular.module('fluidvids',[]);
  fluidvids.directive('fluidvids', function () {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        video: '@'
      },
      template: '<div class="fluidvids">' +
      '<iframe src="//player.vimeo.com/video/23919731"></iframe>' +
      '</div>',
      link: function (scope, element, attrs) {
        var ratio = (attrs.height / attrs.width) * 100;
        element[0].style.paddingTop = ratio + '%';
      }
    };
  });

