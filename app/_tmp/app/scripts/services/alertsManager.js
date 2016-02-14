/**
 * Created by Olive on 29/08/2015.
 */

angular.module('firstAppApp')
  .factory('alertsManager', function() {
    return {
      alerts: {},
      addAlert: function(message, type) {
        this.alerts[type] = this.alerts[type] || [];
        this.alerts[type].push(message);
      },
      clearAlerts: function() {
        for(var x in this.alerts) {
          delete this.alerts[x];
        }
      }
    };
  });


function AlertsCtrl($scope, alertsManager) {
  $scope.alerts = alertsManager.alerts;
};

function FooCtrl($scope, alertsManager) {
  $scope.doGood = function() {
    alertsManager.addAlert('Yay!', 'alert-success');
  };
  $scope.doEvil = function() {
    alertsManager.addAlert('Noooo!', 'alert-error');
  };
  $scope.reset = function() {
    alertsManager.clearAlerts();
  };
};

