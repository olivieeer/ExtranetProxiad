'use strict';

angular.module('firstAppApp')
  .directive('notification', ['$timeout', function ($timeout) {
  return {
    restrict: 'A',
    controller: ['$scope', function ($scope) {
      $scope.notification = {
        status: 'hide',
        type: 'success',
        message: 'Welcome! It\'s yet another angular alert ;)'
      };
    }],
    link: function(scope, elem, attrs) {
      // watch for changes
      attrs.$observe('notification', function (value) {
      if (value === 'show') {
          // shows alert
          $(elem).show();
            // and after 3secs
          $timeout(function () {
            // hide it
            $(elem).hide();
            // and update the show property
           scope.notification.status = 'hide';
        }, 3000);
       }
      });
    }
  };
}]);
