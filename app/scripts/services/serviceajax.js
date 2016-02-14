'use strict';

/**
 * @ngdoc service
 * @name firstAppApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the firstAppApp.
 */
angular.module('firstAppApp')
  .factory('serviceAjax', function serviceAjax($http) {
    return{
      search: function(query, page){
        return $http.get("http://localhost:3000/search?q=" + query + "&page=" + page);
      },
      info: function(id){
        return $http.get("http://localhost:3000/info/" + id);
      },
      popular: function(page){
        return $http.get("http://localhost:3000/popular?page=" + page);
      }
    };
  });
