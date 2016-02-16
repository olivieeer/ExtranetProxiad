'use strict';

/**
 * @ngdoc overview
 * @name firstAppApp
 * @description
 * # firstAppApp
 *
 * Main module of the application.
 */
angular
  .module('firstAppApp', [
    'craEcranBController',
    'craEcranAController',
	'absenceController',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	   .when('/craEcranA', {
        templateUrl: 'views/craEcranA.html',
        controller: 'CraEcranACtrl'
      })
	  .when('/absence', {
        templateUrl: 'views/absence.html',
        controller: 'AbsenceCtrl'
      })
      .when('/craEcranB', {
        templateUrl: 'views/craEcranB.html',
        controller: 'CraEcranBCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
