'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:absenceCtrl
 * @description
 * # absenceCtrl
 * Controller of the firstAppApp
 */


var absence = angular.module('absence', []);

absence.controller('AbsenceCtrl', ['$scope',
  function ($scope) {

     // Bouchon : Initialisation des jours de congés
    $scope.nbJoursConges = 16;
    $scope.nbJoursCongesRestant = $scope.nbJoursConges;
    $scope.nbJoursCongesExceptionnel = 1;
    $scope.nbJoursRtt = 3;
    $scope.nbJoursRttRestant = $scope.nbJoursRtt;
    $scope.nbJoursCongesSansSolde = 0;
    $scope.nbJoursDemandes = 0;

    $scope.types = [
      {name:'Congés payés', 'value' : 1},
      {name:'Congés exceptionnels' , 'value' : 2},
      {name:'RTT', 'value' : 3},
      {name:'Congés sans solde', 'value' : 4},
      {name:'Congés maternité', 'value' : 5},
      {name:'Congés paternité', 'value' : 6},
      {name:'Maladie', 'value' : 7},
      {name:'Congés parental', 'value' : 8},
      {name:'Congés pathologique', 'value' : 9},
      {name:'Visite prénatale', 'value' : 10}
    ];
    // Fin Bouchon

    $scope.master = {};

    $scope.update = function(conges) {
      $scope.master = angular.copy($scope.conges);
    };

    $scope.reset = function() {
      $scope.conges = angular.copy($scope.master);
    };
    $scope.reset();

     $scope.conges = {
      
     };
		 
		$('#sandbox-container .input-group.date').datepicker({
});
    $scope.onCheckBoxMatinChange = function () {
     if ( $scope.conges.check1Matin ) {
       $scope.conges.check1Aprem = false;
     }
    };

    $scope.onCheckBoxApremChange = function () {
     if ( $scope.conges.check1Aprem ) {
       $scope.conges.check1Matin = false;
     }
    };

    // Determine if this browser supports the date input type.
    // $scope.dateSupported = function() {
    //   var el = document.createElement('input'),
    //     invalidVal = 'foo'; // Any value that is not a date
    //   el.setAttribute('type','date');
    //   el.setAttribute('value', invalidVal);
    //   // A supported browser will modify this if it is a true date field
    //   return el.value !== invalidVal;
    // };
    // $scope.dateSupported();


     $scope.initDatepicker = function() {

       var pickerOpts = {
         showOn: "button",
   
         dateFormat: 'dd/mm/yy',
         minDate: 0,
         beforeShowDay: $.datepicker.noWeekends
     };

     $( '#datedebut,#dateFin' ).datepicker(pickerOpts).next('button').button({
       icons: {
         primary: 'ui-icon-calendar'
       }, text:false
     });
     };

     $scope.initDatepicker();

     $scope.actualiseTypeConges = function() {
       $scope.nbJoursCongesRestant = $scope.nbJoursConges;
       $scope.nbJoursRttRestant = $scope.nbJoursRtt;
      if ($scope.conges.type === undefined ) {
        return;
      }
      if($scope.conges.type.value === 1) {
        $scope.nbJoursCongesRestant -= $scope.nbJoursDemandes;
        return $scope.nbJoursCongesRestant;
      } else if($scope.conges.type.value === 3){
        $scope.nbJoursRttRestant -= $scope.nbJoursDemandes;
        return $scope.nbJoursRttRestant;
      }
    };

     $scope.getDate = function (strDate){
       var day = strDate.substring(0,2);
       var month = strDate.substring(3,5) - 1;
       var year = strDate.substring(6,10);
       var d = new Date();
       d.setDate(day);
       d.setMonth(month);
       d.setFullYear(year);
       return d;
     };

     $scope.differenceJours = function (date1, date2){
       if ( date2 === undefined && date1 !== undefined) {
         if($scope.conges.check1Matin === true || $scope.conges.check1Aprem === true) {
           $scope.nbJoursDemandes = 0.5;
         } else {
           $scope.nbJoursDemandes = 1;
         }
       } else {
         var startDate, endDate;
         startDate = $scope.getDate(date1);
         endDate = $scope.getDate(date2);
         // Calculate days between dates
         var millisecondsPerDay = 86400 * 1000; // Day in milliseconds
         startDate.setHours(0,0,0,1);  // Start just after midnight
         endDate.setHours(23,59,59,999);  // End just before midnight
         var diff = endDate - startDate;  // Milliseconds between datetime objects
         var days = Math.ceil(diff / millisecondsPerDay);
         // Subtract two weekend days for every week in between
         var weeks = Math.floor(days / 7);
         days = days - (weeks * 2);
         // Handle special cases
         var startDay = startDate.getDay();
         var endDay = endDate.getDay();
         // Remove weekend not previously removed.
         if (startDay - endDay > 1) {
           days = days - 2;
         }
         if($scope.conges.check1Matin === true || $scope.conges.check1Aprem === true) {
           days -= 0.5;
         }
         if($scope.conges.check2Matin === true ) {
           days -= 0.5;
         }
         $scope.nbJoursDemandes = days;
       }
       return $scope.nbJoursDemandes;
     };

    $scope.today = function() {
      $scope.conges.datedebut = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.conges.datedebut = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();
    $scope.maxDate = new Date(2020, 5, 22);

    $scope.open = function() {
      $scope.status.opened = true;
    };

    $scope.setDate = function(year, month, day) {
      $scope.conges.datedebut = new Date(year, month, day);
    };

    
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 2);
  
    

  }]);
