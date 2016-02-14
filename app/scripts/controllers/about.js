'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the firstAppApp
 */
var about = angular.module('about',[]);
  about.controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
