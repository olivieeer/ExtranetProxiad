'use strict';

/**
 * @ngdoc overview
 * @name firstAppApp
 * @description
 * # firstAppApp
 *
 * Main module of the application.
 */
var myApp = angular
  .module('app', [
    'craEcranB',
    'absence',
		'todo',
		'about',
    'craEcranA',
    'animation',
    'ngRoute',
    'ngScrollbar',
    'ngSanitize',
/*     'ngAnimate', */
    'ngMessages',
		'absence',
		'alertMod',
    'mgcrea.ngStrap.modal',
    'mgcrea.ngStrap.aside',
    'mgcrea.ngStrap.tooltip',
		'ngScrollbar',
		'alertMod',
		'main',
		'datedirective'
		
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/absence', {
        templateUrl: 'views/absence.html',
        controller: 'AbsenceCtrl'
      })
      .when('/search/:query', {
        templateUrl: 'views/movies.html',
        controller: 'SearchCtrl'
      })
      .when('/info/:id', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl'
      })
      .when('/craEcranA', {
        templateUrl: 'views/craEcranA.html',
        controller: 'CraEcranACtrl'
      })
      .when('/craEcranB', {
        templateUrl: 'views/craEcranB.html',
        controller: 'CraEcranBCtrl'
      })
      .when('/craEcranBB', {
        templateUrl: 'views/craEcranBB.html',
        controller: 'CraEcranBBCtrl'
      })
      .when('/animation', {
        templateUrl: 'views/animation.html',
        controller: 'AnimationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

