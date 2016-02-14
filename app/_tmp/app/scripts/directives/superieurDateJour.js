/**
 * Created by ocallens on 01/09/15.
 */

/**
 * Created by ocallens on 31/08/15.
 */

'use strict';

/**
 * @ngdoc directive
 * @name firstAppApp.directive:superieurDateJour
 * @description
 * # loading
 */
angular.module('firstAppApp')
    .directive('superieurDateJour', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelCtrl) {
                var date, today;
                today = new Date();
                today.setDate(today.getDate()-1);
                scope.$watch(attrs.ngModel, function (value) {
                    date = value;
                    validate();
                });
                function validate() {
                    ngModelCtrl.$setValidity('superieurDateJour',
                        !date || date >= today);
                }
            }
        };
    });


