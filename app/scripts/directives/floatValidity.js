/**
 * Created by Olive on 17/10/2015.
 */

'use strict';

/**
 * @ngdoc directive
 * @name firstAppApp.directive:floatValidity
 * @description
 * # loading
 */
angular.module('firstAppApp')
  .directive('floatValidity', function () {
     // return {
     //   require: '?ngModel',
     //   link: function (scope, element, attrs, ngModelCtrl) {
     
     //     var entry, isValid;
     //     isValid  = false;
     //     scope.$watch(attrs.ngModel, function (value) {
     //       entry = value;
     //       // validate();
     //     });
     
     //     function validate() {
     //       if ( ( (value >= 0) && ( value <= 1 ) && ( isFloat(value) ) ) || ( value == 1 ) || ( value == 0 ) ) {
     //         isValid  = true;
     //       } else {
     //         isValid  = false;
     //       }
     
     //       ngModelCtrl.$setValidity('floatValidity',
     //         isValid);
     //     }
     //   }
     // };


      return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
          if(!ngModelCtrl) {
            return;
          }

          ngModelCtrl.$parsers.push(function(val) {
            if (angular.isUndefined(val)) {
              var val = '';
            }
            var clean = val.replace(/[^0-9\.]/g, '');
            var decimalCheck = clean.split('.');

            if(!angular.isUndefined(decimalCheck[1])) {
              decimalCheck[1] = decimalCheck[1].slice(0,2);
              clean =decimalCheck[0] + '.' + decimalCheck[1];
            }

            if (val !== clean) {
              ngModelCtrl.$setViewValue(clean);
              ngModelCtrl.$render(); 
            }
            return clean;
          });

          element.bind('keypress', function(event) {
            if(event.keyCode === 32) {
              event.preventDefault();
            }
          });
        }
      };

  })

