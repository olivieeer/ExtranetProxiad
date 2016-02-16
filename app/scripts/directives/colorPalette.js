'use strict';

/**
 * @ngdoc directive
 * @name firstAppApp.directive:colorPalette
 * @description
 * # colorPalette
 */

var palette = angular.module('palette', []);

palette.directive('colorPalette', ['$animate', function ($animate) {

  return function (scope, elem, attrs) {

    elem.on('click', function (elem) {
      console.log("clicked");
      var promise = $animate.addClass(elem, "shake");
      promise.then(function () {
        $animate.removeClass(elem, "shake");
      });

    });

  }

}]);


//
//angular.module('firstAppApp', ['ngAnimate'])
//  .directive('colorPalette', ['$animate', function ($animate) {
//    return function (scope, elem, attrs) {
//      elem.on('click', function (elem) {
//        scope.$apply(function() {
//          var el = angular.element(document.getElementsByClassName("divColorPalette"));
//          var promise = $animate.addClass(el, "bounceIn");
//          promise.then(function () {
//            scope.$apply(function() {
//              $animate.removeClass(el, "bounceIn");
//            });
//          });
//        });
//      });
//    }}
//  ]);
