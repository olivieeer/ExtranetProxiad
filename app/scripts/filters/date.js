'use strict';

/**
 * @ngdoc filter
 * @name firstAppApp.filter:date
 * @function
 * @description
 * # date
 * Filter in the firstAppApp.
 */
 
angular.module('firstAppApp')
  .filter('date', function ($filter) {
    return function (input) {
      if(input === null){ return ""; }
      var _date = $filter('date')(new Date(input), 'dd/MM/yyyy');
      window.alert(_date);
      return _date.toUpperCase();
    };
  });
