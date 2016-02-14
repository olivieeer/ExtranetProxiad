'use strict';

/**
* @ngdoc function
* @name firstAppApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the firstAppApp
*/
var main = angular.module('main', []);
main.controller('MainCtrl', function () {
this.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
];
});
