/**
 * Created by Olive on 28/08/2015.
 */

'use strict';

/**
 * @ngdoc directive
 * @name firstAppApp.directive:loading
 * @description
 * # loading
 */
angular.module('firstAppApp')
.directive('dateAfter', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            var date, otherDate;
            scope.$watch(attrs.dateAfter, function (value) {
                otherDate = value;
                validate();
            });
            scope.$watch(attrs.ngModel, function (value) {
                date = value;
                validate();
            });
            function validate() {
                ngModelCtrl.$setValidity('dateAfter',
                    !date || !otherDate || date >= otherDate);
            }
        }
    };
})
