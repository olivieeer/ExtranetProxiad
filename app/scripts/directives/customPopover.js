'use strict';

/**
 * @ngdoc directive
 * @name firstAppApp.directive:customPopover
 * @description
 * # customPopover
 */

var customPopover = angular.module('customPopover',[]);
  customPopover.directive('customPopover', function () { 
    return {
        restrict: 'A',
        template: '<span>{{label}}</span>',
        link: function (scope, el, attrs) {
            scope.label = attrs.popoverLabel;
            $(el).popover({
                trigger: 'hover',
                html: true,
                content: attrs.popoverHtml,
                placement: attrs.popoverPlacement
            });
        }
    }
  });
