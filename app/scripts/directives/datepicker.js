/**
 * Created by Olive on 30/08/2015.
 */

'use strict';

/**
 * @ngdoc directive
 * @name firstAppApp.directive:loading
 * @description
 * # loadingangular.module('app', ['ui.bootstrap'])
 */
var datedirective = angular.module('datedirective',[]);
  datedirective.directive('datePicker', function () {
    return {
      restrict: 'E',
      require: ['ngModel'],
      controller: 'datepickerCtrl',
      scope: {
        ngModel: '='
      },
      replace: true,
      template:
      '<div class="input-group">'     +
      '<input type="text"  class="form-control" ngModel required>' +
      '<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>' +
      '</div>' ,
      link: function(scope, element, attrs) {
        element.datepicker({});
        var input = element.find('input');
        var nowTemp = new Date();
        var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(),0,0,0,0);
        console.log(now);
        console.log(nowTemp);

        input.datepicker({
          format: "yyyy-mm-dd",
          onRender: function(date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
          }

        });

        element.bind('blur keyup change', function() {
          scope.ngModel = input.val();
          console.info('date-picker event', input.val(), scope.ngModel);
        });
      }
    };
  });

