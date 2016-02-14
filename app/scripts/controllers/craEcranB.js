'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:CraCtrl
 * @description
 * # CraCtrl
 * Controller of the firstAppApp
 */




var craEcranB = angular.module('craEcranB', []);

craEcranB.controller('CraEcranBCtrl', ['$scope', 
  function ($scope) {

    $scope.debutMois = new Date();
    $scope.nbJoursTravailles = 0;
    $scope.nbJoursNonTravailles = 0;
    $scope.nbJoursAbsences = 0;
    $scope.nbJoursOuvres = 0;
    $scope.lignesCra = [];
    $scope.nbToComplete = [];
    $scope.headers = [];
    $scope.lignesAbsence = [];
    $scope.headerMission = [];
    $scope.headerAbsence = [];
    $scope.ligneEnErreur = null;
    $scope.libelleErreur = "";
    $scope.aniennneLigneEnErreur = null;
    $scope.nombreMission = 0;
    $scope.nombreAbsence = 0;
    $scope.isCraValid = false;
    $scope.isEnErreur = false;
    $scope.showVideo = false;
    $scope.showModalError = false;
    $scope.video = {};
    $scope.colorsPalette = [ { id:0,color:"white",value:"0", hover:"", colorInit : "white"},{id:1,color:"middleGrey",value:"0.5", hover:"", colorInit : "middleGrey"},{id:2,color:"darkGrey", value:"1",hover:"", colorInit : "darkGrey"}];
    $scope.valueItemColor = null;
    $scope.libelleClient = 'yahoo';
    $scope.craValide = true;
    $scope.animeEnCours = true;
    $scope.$on('data_shared',function(){
      var libelleClient =  dataShare.getData();
      $scope.libelleClient = libelleClient;
    });
    //$scope.libelleClient =  dataShare.getData();
    $scope.types = [
      {name:'Congés payés', 'value': 1},
      {name:'Congés exceptionnels' , 'value': 2},
      {name:'RTT', 'value': 3},
      {name:'Congés sans solde', 'value': 4}
    ];

    var self = this;
    self.bigger = false;
    self.lightTheme = false;
    self.craValide = true;
    var options = {};
    $scope.video.src = "//player.vimeo.com/video/23919731";
    var formData = {
      firstname: "default",
      emailaddress: "default",
      textareacontent: "default",
      gender: "default",
      member: false,
      file_profile: "default",
      file_avatar: "default"
    };

		 $scope.validForm = function(  ) {
      if ( craForm.isDirty ) {
     
       } 
      var i, j, k, nbDaysInMonth, sumQuotidienneTravaillee = 0, sumQuotidienneAbsence = 0, dateTemp, dayOfWeek, formData;
      formData = $scope.craForm;
      nbDaysInMonth = new Date($scope.debutMois.getFullYear(), $scope.debutMois.getMonth() + 1, 0).getDate();
      for (k = 1; k <= nbDaysInMonth; k++) {
        dateTemp = new Date($scope.debutMois.getFullYear(), $scope.debutMois.getMonth(), k);
        dayOfWeek = dateTemp.getDay();
        if (dayOfWeek <= 0 && dayOfWeek >= 6) {
          continue;
        }
        for ( i = 0 ; i<$scope.lignesCra.length; i++) {
          if ($scope.lignesCra[i][k + 2].data !==  "") {
            sumQuotidienneTravaillee += parseFloat($scope.lignesCra[i][k + 2].data);
          }
        }
        for ( j = 0 ; j<$scope.lignesAbsence.length; j++) {
          if ($scope.lignesAbsence[j][k + 2].data !==  "") {
            sumQuotidienneAbsence += parseFloat($scope.lignesAbsence[j][k + 2].data);
          }
        }
        if ( sumQuotidienneTravaillee + sumQuotidienneAbsence !==  1) {
          //window.alert(" c pas bon "+dateTemp);
          $scope.ligneEnErreur = "jour "+k;
          if ( sumQuotidienneTravaillee + sumQuotidienneAbsence > 1) {
            $scope.libelleErreur = "Vous avez trop travaillé";
          }
          if ( sumQuotidienneTravaillee + sumQuotidienneAbsence < 1) {
            $scope.libelleErreur = "Vous n\'avez pas assez travaillé";
          }
          $scope.headerMission[k+3].class ="thHeaderInError";
          if ( typeof $scope.lignesCra[0][k+3] === 'object') {
            $scope.lignesCra[0][k+3].class ="tdInError";
          }
          $scope.showModalError = true;
          if ( $scope.anciennneLigneEnErreur !==  null) {
            if (typeof $scope.headerMission[$scope.anciennneLigneEnErreur + 3] !== "undefined") {
						$scope.headerMission[$scope.anciennneLigneEnErreur + 3].class ="thHeaderCell";}
						 if (typeof $scope.lignesCra[0][$scope.anciennneLigneEnErreur + 3] !== "undefined") {
						$scope.lignesCra[0][$scope.anciennneLigneEnErreur + 3].class ="tdDayNotDisabled";}
          }
          $scope.isEnErreur = true;
          $scope.anciennneLigneEnErreur = k;
          return false;
        } else {
          if ($scope.headerMission[k+3].class !==  "thHeaderToggle") {
            $scope.headerMission[k+3].class ="thHeaderCell";
          }
          $scope.ligneEnErreur = null;
          $scope.anciennneLigneEnErreur = null;
          $scope.libelleErreur = "";
          $scope.isEnErreur = false;
          $scope.showModalError = false;
        }
      }
      //window.alert(" c  bon ");
      $scope.ligneEnErreur = null;
      return true;
    };
		
		$scope.$watch('nbJoursTravailles', function() {
			$scope.validForm();
		});
		$scope.$watch('nbJoursAbsences', function() {
			$scope.validForm();
		});

$('.item').bind('click',function(){
  // Si l'attribut auteur existe...
  $(this).css('backgroundColor : "orange"');
});

    $scope.changeColor = function( tabItem, item ) {
      if($scope.itemColorizedId === item.id ) {
				return;
			} else {
				if (typeof $scope.itemColorizedId !== "undefined"){
					$scope.colorsPalette[$scope.itemColorizedId].color = $scope.colorsPalette[$scope.itemColorizedId].colorInit;
				}
				$scope.colorsPalette[item.id].color = "orange";
				$('#item.id').css('background-color','orange');
			}
      $scope.itemColorizedId = item.id;
    };

    $scope.save = function() {
      formData = $scope.form;
    };

		
    $scope.headerCraToToggle = function(item) {
      if (!item.hasOnClick) {
        return 0;
      }
      if (!item.hasBeenToggle) {
        item.class = "thHeaderToggle";
        item.hasBeenToggle = true;
        if ( $scope.valueItemColor === null) {
          $scope.lignesCra[0][item.label+2].data = 1;
          $scope.nbJoursTravailles += 1;
        } else {
          $scope.lignesCra[0][item.label+2].data = parseFloat($scope.valueItemColor);
          $scope.nbJoursTravailles += parseFloat($scope.valueItemColor);
        }
        $scope.lignesCra[0][item.label+2].class = "tdDayNotDisabled";
        $scope.lignesCra[0][item.label+2].isComplete = true;
      } else {
        item.class = "thHeaderCell";
        item.hasBeenToggle = false;
        item.opacity = 1;
        $scope.lignesCra[0][0].image.src = "images/ok-icon.png";
        $scope.lignesCra[0][item.label+2].data = "";
        $scope.lignesCra[0][item.label+2].class = "tdDayNotDisabled";
        $scope.headerMission[item.label+2].class = "thHeaderCell";
				if ( $scope.valueItemColor === null) {
          $scope.lignesCra[0][item.label+2].data = 1;
          $scope.nbJoursTravailles -= 1;
        } else {
          $scope.nbJoursTravailles -= parseFloat($scope.valueItemColor);
        }
        $scope.lignesCra[0][item.label+2].isComplete =false;
        if ( $scope.anciennneLigneEnErreur !==  null) {
          /* $scope.headerMission[$scope.anciennneLigneEnErreur + 2].class ="thHeaderCell";
          $scope.lignesCra[0][$scope.anciennneLigneEnErreur + 2].class = "tdDayNotDisabled"; */
        }
      }
      return item;
    };

    //$scope.$watch('showModalError', function() {
    //  window.alert('La variable nbJoursTravailles a été modifiée');
    //});

   

    $scope.headerAbsenceToToggle = function(nb) {
      if (!nb.hasOnClick) {
        return 0;
      }
      if (!nb.hasBeenToggle) {
        nb.class = "thHeaderToggle";
        nb.hasBeenToggle = true;

        if ( $scope.valueItemColor === null) {
          $scope.lignesAbsence[0][nb.label+2].data = 1;
          $scope.nbJoursTravailles += 1;
        } else {
          $scope.lignesAbsence[0][nb.label+2].data = parseFloat($scope.valueItemColor);
          $scope.nbJoursTravailles += parseFloat($scope.valueItemColor);
        }

        $scope.lignesAbsence[0][nb.label+2].data ="1.0";
        $scope.nbJoursNonTravailles += 1;
        $scope.lignesAbsence[0][nb.label+2].isComplete =true;
        $scope.lignesAbsence[0][nb.label+2].class = "tdDayNotDisabled";
      } else {
        nb.class = "thHeaderCell";
        nb.hasBeenToggle = false;
        nb.opacity = 1;
        $scope.lignesAbsence[0][0].image.src = "images/ok-icon.png";
        $scope.lignesAbsence[0][nb.label+2].data = "";
        $scope.headerAbsence[nb.label+2].class = "thHeaderCell";
        $scope.lignesAbsence[0][nb.label+2].class = "tdDayNotDisabled";
        $scope.nbJoursNonTravailles -= 1;
        $scope.lignesAbsence[0][nb.label+2].isComplete =false;
        if ( $scope.anciennneLigneEnErreur !==  null) {
          $scope.headerAbsence[$scope.anciennneLigneEnErreur + 2].class ="thHeaderCell";
          $scope.lignesAbsence[0][$scope.anciennneLigneEnErreur + 2].class = "tdDayNotDisabled";
        }
      }
      return nb;
    };

    $scope.setItemLigneCraToComplete = function( nb) {
      var item = $scope.lignsCra.indexOf(nb);
      item.isComplete = true;
    };

    $scope.initCraHeaderForm = function(d1) {
      var i, dayOfWeek, nbDaysInMonth, dateTemp;
      $scope.headerMission.push({ ligneCraNumber: 0, label: "", data: "", size: "1", class: "thHeaderCell1", hasBeenToggle: false , hasOnClick: false, onClick: null, disabled: false });
      $scope.headerMission.push({ ligneCraNumber: 0, label: "Client", data: "", size: "1", class: "thHeaderCell2", hasBeenToggle: false , hasOnClick: false, onClick: null, disabled: false });
      $scope.headerMission.push({ ligneCraNumber: 0, label: "Mission", data: "", size: "1", class: "thHeaderCell3", hasBeenToggle: false , hasOnClick: false, onClick: null,disabled: false });
      nbDaysInMonth = new Date(d1.getFullYear(), d1.getMonth() + 1, 0).getDate();
      dateTemp = new Date(d1);
      for (i = 1; i <= nbDaysInMonth; i++) {
        dayOfWeek = dateTemp.getDay();
        if (dayOfWeek > 0 && dayOfWeek < 6) {
          $scope.headerMission.push({ ligneCraNumber: 0, label: i, data: i, size: "1", width: 10, bgColor: "lightBlue", type:"craInput", class: "thHeaderCell", hasBeenToggle: false , hasOnClick: true, onClick: "toggleB("+ i +")", disabled: false });
          $scope.nbJoursOuvres += 1;
        } else {
          $scope.headerMission.push({ ligneCraNumber: 0, label: i, data: i, size: "1", width: 10, bgColor: "red", type:"red", class: "headerWe", hasBeenToggle: false , hasOnClick: false, onClick: "", disabled: true });
        }
        dateTemp.setDate(dateTemp.getDate() + 1);
      }
      $scope.headers.push($scope.headerMission);
    };


    $scope.addMissionToCraForm = function() {
      var nbJoursDsMois, j, dateTemp, nbDayInWeek, missionNumber, cell1,cell2, cell3, jour, cell1Text, cell2Text, cell3Text, jourText, monIdNb, nb, libelleClient;
      missionNumber = $scope.lignesCra.length + 1;
      libelleClient = $scope.libelleClient;
      $scope.ligneCra = [];
      $scope.ligneCra.ligneCraNumber = $scope.lignesCra.length;
      nb = $scope.lignesCra.length;
      cell1Text = '{ "id": "cell_1"+"_"+"missionNumber", monId: false, hasErreur: false, ligneCraNumber: missionNumber, name: nb+"_a", date: "", libelleDate: "", value: "", isComplete: false , isDay: false, label: "", data: "_", class: "tdCell", hasInput: false, hasImage: true, image: { src: "images/remove.png", title: "Supprimer le ligne de cra" }, isLabel: false, disabled: false , srcImage: "images/remove.png" }';
      cell1 = eval('(' + cell1Text + ')');
      $scope.ligneCra.push(cell1);
      cell2Text = '{ "id": "cell_2"+"_"+"missionNumber", monId: false, hasErreur: false, ligneCraNumber: missionNumber, name: nb+"_b", date: "", libelleDate: "", value: "", isComplete: false , isDay: false, label: "Client", data: libelleClient, class: "tdCell", hasInput: true, input: { type: "text", size: "80px" }, hasImage: false, isLabel: true, disabled: false }';
      cell2 = ('(' + cell2Text + ')');
      //Object.toJSON(cell2Text);
      //cell2 = jQuery.parseJSON(cell2Text);
      $scope.ligneCra.push(cell2);
      cell3Text = '{ "id": "cell_3"+"_"+"missionNumber", monId: false, hasErreur: false, ligneCraNumber: missionNumber, name: nb+"_c", date: "", libelleDate: "", value: "", isComplete: false , isDay: false, label: "Mission", data: "_", class: "tdCell", hasInput: true, "input": { type: "text", size: 10 }, hasImage: false, isLabel: true, disabled: false }';
      cell3 = ('(' + cell3Text + ')');

      $scope.ligneCra.push(cell3);
      nbJoursDsMois = new Date($scope.debutMois.getFullYear(), $scope.debutMois.getMonth() + 1, 0).getDate();
      dateTemp = new Date($scope.debutMois.getFullYear(), $scope.debutMois.getMonth(), $scope.debutMois.getDate());
      for (j = 1; j <= nbJoursDsMois; j++) {
        nbDayInWeek = dateTemp.getDay();
        if (nbDayInWeek > 0 && nbDayInWeek < 6) {
          monIdNb = missionNumber + "_" + j;
          if( (j === 4) && ( missionNumber === 1) ){
            jourText = '{ "id": "jour_" + j + "_" + "missionNumber", monId: monIdNb, hasErreur: true, ligneCraNumber: missionNumber, name: nb+"_d"+j, date: dateTemp, libelleDate: dateTemp.toString(), label: j, data: "", type: "string", value: "", isComplete: false , isDay: true, class: "tdDayNotDisabled", isTravaille: true, bgColor: "white", dayOfWeek: dateTemp.getDay(), dayOfMonth: j, width: "10", height: "10", hasInput: "true", "input": {"type": "text", "size": 1}, hasImage: false, image: {}, disabled: false }';
          } else {
            jourText = '{ "id": "jour_" + j + "_" + "missionNumber", monId: monIdNb, hasErreur: false, ligneCraNumber: missionNumber, name: nb+"_d"+j, date: dateTemp, libelleDate: dateTemp.toString(), label: j, data: "", type: "string", value: "", isComplete: false , isDay: true, class: "tdDayNotDisabled", isTravaille: true, bgColor: "white", dayOfWeek: dateTemp.getDay(), dayOfMonth: j, width: "10", height: "10", hasInput: "true", "input": {"type": "text", "size": 1}, hasImage: false, image: {}, disabled: false }';
          }
        } else {
          jourText = '{ "id": "jour_" + j + "_" + "missionNumber", monId: false, hasErreur: false, ligneCraNumber: missionNumber, name: nb+"_d"+j, date: dateTemp, libelleDate: dateTemp.toString(), label: j, data: "", type: "string", value: "", isComplete: false , isDay: true, class: "tdDayDisabled", isTravaille: false, bgColor: "red", dayOfWeek: dateTemp.getDay(), dayOfMonth: j, width: "10", height: "10", hasInput: false, "input": {"type": "text", "size": 1}, hasImage: false, image: {}, disabled: true }';
        }
        jour = eval('(' + jourText + ')');
        dateTemp.setDate(dateTemp.getDate() + 1);
        $scope.ligneCra.push(jour);
      }
      $scope.lignesCra.push($scope.ligneCra);
    };

    $scope.addAbsence = function() {
      var nbDaysInMonth, k, dayOfWeek, dateTemp, absenceNumber, cell1Text, cell2Text, cell3Text, cell1, cell2, cell3, jour, jourText;
      nbDaysInMonth = new Date($scope.debutMois.getFullYear(), $scope.debutMois.getMonth() + 1, 0).getDate();
      dateTemp = new Date($scope.debutMois.getFullYear(), $scope.debutMois.getMonth(), $scope.debutMois.getDate());
      absenceNumber = $scope.lignesAbsence.length + 1;
      $scope.ligneAbsence = [];
      $scope.ligneAbsence.ligneAbsenceNumber = $scope.lignesCra.length +1;
      cell1Text = '{ "id": "cell_1"+"_"+"absenceNumber", ligneAbsenceNumber: absenceNumber, name: "", date: "", libelleDate: "", value: "", isComplete: false , isDay: false, label: "", data: "", class: "tdCell", hasInput: false, hasImage: true, image: { src: "images/remove.png", title: 10 }, isLabel: false, disabled: false , srcImage: "images/remove.png" }';
      cell1 = eval('(' + cell1Text + ')');
      $scope.ligneAbsence.push(cell1);
      cell2Text = '{ "id": "cell_2"+"_"+"absenceNumber", ligneAbsenceNumber: absenceNumber, name: "", date: "", libelleDate: "", value: "", isComplete: false , isDay: false, label: "type", data: "", class: "tdCell", hasInput: true, input: { type: "text", size: 10 }, hasImage: false, isLabel: true, disabled: false }';
      cell2 = eval('(' + cell2Text + ')');
      $scope.ligneAbsence.push(cell2);
      cell3Text = '{ "id": "cell_3"+"_"+"absenceNumber", ligneAbsenceNumber: absenceNumber, name: "", date: "", libelleDate: "", value: "", isComplete: false , isDay: false, label: "Description", data: "", class: "tdCell", hasInput: true, input: { type: "text", size: 20 }, hasImage: false, isLabel: true, disabled: false }';
      cell3 = eval('(' + cell3Text + ')');
      $scope.ligneAbsence.push(cell3);
      for (k = 1; k <= nbDaysInMonth; k++) {
        dayOfWeek = dateTemp.getDay();
        if (dayOfWeek > 0 && dayOfWeek < 6) {
          jourText = '{ "id": "abs_"+ k +"_"+"absenceNumber", ligneAbsenceNumber: absenceNumber, name: "", date: dateTemp, libelleDate: dateTemp.toString(), value: "", isComplete: false , isDay: true, label: k, data: "", class: "tdDayNotDisabled", hasInput: true, hasImage: false, isLabel: false, disabled: false }';
          jour = eval('(' + jourText + ')');
        } else {
          jourText = '{ "id": "abs_"+ k +"_"+"absenceNumber", ligneAbsenceNumber: absenceNumber, name: "", date: dateTemp, libelleDate: dateTemp.toString(), value: "", isComplete: false , isDay: true, label: k, data: "", class: "tdDayDisabled", hasInput: true, hasImage: false, isLabel: false, disabled: true }';
          jour = eval('(' + jourText+ ')');
        }
        $scope.ligneAbsence.push(jour);
        dateTemp.setDate(dateTemp.getDate() + 1);
      }
      $scope.lignesAbsence.push($scope.ligneAbsence);
    };

    $scope.submit = function () {
      window.alert(" submit ");
    };
    $scope.save = function() {
      var formData = $scope.craForm;
    };


    $scope.validerAbsence = function() {
      var nbDaysInMonth, k, dayOfWeek, dateTemp, absenceNumber, cell1Text, cell2Text, cell3Text, cell1, cell2, cell3, jour, jourText;
    };


    $scope.initAbsenceHeaderForm = function(d1) {
      var nbJoursDsMois, i, j, dateTmp, nbDayInWeek;
      $scope.headerAbsence.push({ ligneAbsenceNumber: 0, "width": 100, "label": "", hasInput: false, hasImage: false, "data": "", class:"thHeaderCell1", "color":"blue", type: "label", disabled: false });
      $scope.headerAbsence.push({ ligneAbsenceNumber: 0, "width": 100, "label": "Type", hasInput: false, hasImage: false, "data": "Type", class:"thHeaderCell2", "color":"blue", type: "label", disabled: false });
      $scope.headerAbsence.push({ ligneAbsenceNumber: 0, "width": 100, "label": "Description", hasInput: false, hasImage: false, "data": "Description", class:"thHeaderCell3", "color":"blue", type: "myInput", disabled: false });
      nbJoursDsMois = new Date(2015, d1.getMonth() + 1, 0).getDate();
      dateTmp = new Date(d1);
      for (i = 1; i <= nbJoursDsMois; i++) {
        nbDayInWeek = dateTmp.getDay();
        if (nbDayInWeek > 0 && nbDayInWeek < 6) {
          $scope.headerAbsence.push({ ligneAbsenceNumber: 0, "width": 0, "label": i, hasInput: false, hasOnClick: true, hasImage: false, data: i, class:"thHeaderCell", "color":"blue", type: "craInput", disabled: false });
        } else {
          $scope.headerAbsence.push({ ligneAbsenceNumber: 0, "width": 0, "label": i, hasInput: false, hasImage: false, data: i, class:"headerWe", "color":"blue", type: "red", disabled: true });
        }
        dateTmp.setDate(dateTmp.getDate() + 1);
      }$scope.headers.push($scope.headerAbsence);	
    };

    $scope.calculNbJoursTravail = function(	 ) {
      var n, somme, sommeTotale, nombreCellules, nombreMission, indexMission;
      $scope.nbJoursTravailles = 0;
      nombreMission = $scope.lignesCra.length;
      sommeTotale = 0;
      for (n = 0; n < nombreMission; n++) {
        somme = 0;
        for (nombreCellules = 3; nombreCellules < $scope.lignesCra[n].length; nombreCellules++) {
          if (( $scope.lignesCra[n][nombreCellules].data !==  null) && ($scope.lignesCra[n][nombreCellules].data !==  "")) {
            somme += parseFloat($scope.lignesCra[n][nombreCellules].data);
          }
        }
        $scope.lignesCra[n].data = somme;
        sommeTotale += somme;
      }
      $scope.nbJoursTravailles = sommeTotale;
    };

    $scope.calculNbJoursNonTravailles = function() {
      var n, somme, sommeTotale, nombreCellules, nombreAbsence, indexeAbsence;
      $scope.nbJoursNonTravailles = 0;
      nombreAbsence = $scope.lignesAbsence.length;
      sommeTotale = 0;
      for (n = 0; n < nombreAbsence; n++) {
        somme = 0;
        for (nombreCellules = 3; nombreCellules < $scope.lignesAbsence[n].length; nombreCellules++) {
          if (( $scope.lignesAbsence[n][nombreCellules].data !==  null) && ($scope.lignesAbsence[n][nombreCellules].data !==  "")) {
            somme += parseFloat($scope.lignesAbsence[n][nombreCellules].data);
          }
        }
        $scope.lignesAbsence[n].data = somme;
        sommeTotale += somme;
      }
      $scope.nbJoursNonTravailles = sommeTotale;
    };

    $scope.initCraHeaderForm($scope.debutMois);
    $scope.addMissionToCraForm($scope.debutMois);
    $scope.initAbsenceHeaderForm($scope.debutMois);

/*     $scope.nbJoursTravail = function() {
      var n;
      $scope.nbJoursTravailles = 0;
      for (n = 2; n < $scope.lignesCra[0].length; n++) {

        if ($scope.ligneCra[n].data !==  "") {
          $scope.nbJoursTravailles += parseFloat($scope.lignesCra[0][n].data);
        }
      }
      return $scope.nbJoursTravailles;
    }; */


/*     $scope.nbJoursTravail = function() {
      var n, i, nbMissions, sum, nb;
      if ( (this.$parent.item.data === undefined) || (this.$parent.item.data === "")) {
        return;
      }
      nbMissions = $scope.lignesCra.length;
      sum = 0;
      if (this.$parent.item.data !==  ""){
        nb = parseFloat(this.$parent.item.data);
        if ( (isNaN(nb)) || (nb <0) || (nb > 1) ) {
          window.alert("Veuillez entrer un chiffre entre 0 et 1");
          this.$parent.item.data = "";
          return;
        }
      }
      for (i  = 0 ; i<$scope.lignesCra.length ;i++) {
        for (n = 2; n < $scope.lignesCra[i].length; n++) {
          if ($scope.lignesCra[i][n].data !==  "") {
            var t;
            t = parseFloat($scope.lignesCra[i][n].data);
            if ( (isNaN(t)) || (typeof t === "undefined")) {
              window.alert("Veuillez entrer un chiffre entre 0 et 1");
            }
            sum += t;
          }
        }
      }
      $scope.nbJoursTravailles = sum;
    };
 */


    $scope.nbJoursReposs = function() {
      var n;
      $scope.nbJoursRepos = 0;
      for (n = 2; n < $scope.absences.length; n++) {

        if ($scope.absences[n].data !==  "") {
          $scope.nbJoursRepos += parseFloat($scope.absences[n].data);
        }
      }
      return $scope.nbJoursRepos;
    };

    $scope.headerFilter = function(header1) {
      return header1.disabled;
    };

  }]);

craEcranB.controller('CraEcranBBCtrl', ['$scope',
  function ($scope) {
    $scope.debutMois = new Date(2015, 10, 1);
    $scope.nbJoursTravailles = 0;
    $scope.nbJoursNonTravailles = 0;
    $scope.nbJoursAbsences = 0;
    $scope.nbJoursOuvres = 0;
    $scope.lignesCra = [];
    $scope.nbToComplete = [];
    $scope.headers = [];
    $scope.lignesAbsence = [];
    $scope.headersMission = [];
    $scope.headerAbsence = [];
    $scope.ligneEnErreur = null;
    $scope.aniennneLigneEnErreur = null;
    $scope.nombreMission = 0;
    $scope.nombreAbsence = 0;
    $scope.isCraValid = false;
    $scope.isEnErreur = false;


    $scope.types = [
      {name:'Congés payés', 'value': 1},
      {name:'Congés exceptionnels' , 'value': 2},
      {name:'RTT', 'value': 3},
      {name:'Congés sans solde', 'value': 4}
    ];

    $scope.headerToToggle = function(nb) {
      if (!nb.hasOnClick) {
        return 0;
      }
      if (!nb.hasBeenToggle) {
        nb.class = "thHeaderToggle";
        nb.hasBeenToggle = true;
        //nb.opacity = 0.5;
        $scope.lignesCra[0][nb.label+2].data ="1.0";
        $scope.nbJoursTravailles += 1;
        $scope.lignesCra[0][nb.label+2].isComplete =true;
      } else {
        nb.class = "thHeaderCell";
        nb.hasBeenToggle = false;
        nb.opacity = 1;
        $scope.lignesCra[0][0].image.src = "images/ok-icon.png";
        $scope.lignesCra[0][nb.label+2].data = "";
        $scope.headerMission[nb.label+2].class = "thHeaderCell";
        $scope.nbJoursTravailles -= 1;
        $scope.lignesCra[0][nb.label+2].isComplete =false;
        if ( $scope.anciennneLigneEnErreur !==  null) {
          $scope.headerMission[$scope.anciennneLigneEnErreur + 2].class ="thHeaderCell";
        }
      }
      return nb;
    };


    $scope.setItemLigneCraToComplete = function( nb) {
      var item = $scope.lignsCra.indexOf(nb);
      item.isComplete = true;
    };

    $scope.initCraHeaderForm = function(d1) {
      var i, dayOfWeek, nbDaysInMonth, dateTemp, nbWe = 0, nbNouvelleLigne;
      $scope.headerMission = [];
      $scope.headerMission.push({ ligneCraNumber: 0, label: "", data: "", size: "1", class: "thHeaderCell1", hasBeenToggle: false , hasOnClick: false, onClick: null, disabled: false });
      $scope.headerMission.push({ ligneCraNumber: 0, label: "Client", data: "", size: "1", class: "thHeaderCell2", hasBeenToggle: false , hasOnClick: false, onClick: null, disabled: false });
      $scope.headerMission.push({ ligneCraNumber: 0, label: "Mission", data: "", size: "1", class: "thHeaderCell3", hasBeenToggle: false , hasOnClick: false, onClick: null,disabled: false });
      nbDaysInMonth = new Date(d1.getFullYear(), d1.getMonth() + 1, 0).getDate();
      dateTemp = new Date(d1);
      for (i = 1; i <= nbDaysInMonth; i++) {
        if(nbWe >= 2) {
          $scope.headerMission = [];
        }
        dayOfWeek = dateTemp.getDay();
        if (dayOfWeek > 0 && dayOfWeek < 6) {
          $scope.headerMission.push({ ligneCraNumber: 0, label: i, data: i, size: "1", width: 10, bgColor: "lightBlue", type:"craInput", class: "thHeaderCell", hasBeenToggle: false , hasOnClick: true, onClick: "toggleB("+ i +")", disabled: false });
          $scope.nbJoursOuvres += 1;
        } else {
          nbWe = +1;
          $scope.headerMission.push({ ligneCraNumber: 0, label: i, data: i, size: "1", width: 10, bgColor: "red", type:"red", class: "headerWe", hasBeenToggle: false , hasOnClick: false, onClick: "", disabled: true });
        }
        dateTemp.setDate(dateTemp.getDate() + 1);
      }
      $scope.headers.push($scope.headerMission);
    };


    $scope.addMissionToCraForm = function() {
      var nbJoursDsMois, j, dateTemp, nbDayInWeek, missionNumber, cell1,cell2, cell3, jour, cell1Text, cell2Text, cell3Text, jourText, monIdNb, nb;
      missionNumber = $scope.lignesCra.length + 1;
      $scope.ligneCra = [];
      $scope.ligneCra.ligneCraNumber = $scope.lignesCra.length;
      nb = $scope.lignesCra.length;
      cell1Text = '{ "id": "cell_1"+"_"+"missionNumber", monId: false, hasErreur: false, ligneCraNumber: missionNumber, name: nb+"_a", date: "", libelleDate: "", value: "", isComplete: false , isDay: false, label: "", data: "", class: "tdCell", hasInput: false, hasImage: true, image: { src: "images/remove.png", title: 10 }, isLabel: false, disabled: false , srcImage: "images/remove.png" }';
      cell1 = eval('(' + cell1Text + ')');
      $scope.ligneCra.push(cell1);
      cell2Text = '{ "id": "cell_2"+"_"+"missionNumber", monId: false, hasErreur: false, ligneCraNumber: missionNumber, name: nb+"_b", date: "", libelleDate: "", value: "", isComplete: false , isDay: false, label: "Client", data: "", class: "tdCell", hasInput: true, "input": { type: "text", size: 10 }, hasImage: false, isLabel: true, disabled: false }';
      cell2 = eval('(' + cell2Text + ')');
      $scope.ligneCra.push(cell2);
      cell3Text = '{ "id": "cell_3"+"_"+"missionNumber", monId: false, hasErreur: false, ligneCraNumber: missionNumber, name: nb+"_c", date: "", libelleDate: "", value: "", isComplete: false , isDay: false, label: "Mission", data: "", class: "tdCell", hasInput: true, "input": { type: "text", size: 10 }, hasImage: false, isLabel: true, disabled: false }';
      cell3 = eval('(' + cell3Text + ')');
      $scope.ligneCra.push(cell3);
      nbJoursDsMois = new Date($scope.debutMois.getFullYear(), $scope.debutMois.getMonth() + 1, 0).getDate();
      dateTemp = new Date($scope.debutMois.getFullYear(), $scope.debutMois.getMonth(), $scope.debutMois.getDate());
      for (j = 1; j <= nbJoursDsMois; j++) {
        nbDayInWeek = dateTemp.getDay();
        if (nbDayInWeek > 0 && nbDayInWeek < 6) {
          monIdNb = missionNumber + "_" + j;
          if( (j === 4) && ( missionNumber === 1) ){
            jourText = '{ "id": "jour_" + j + "_" + "missionNumber", monId: monIdNb, hasErreur: true, ligneCraNumber: missionNumber, name: nb+"_d"+j, date: dateTemp, libelleDate: dateTemp.toString(), label: j, data: "", type: "string", value: "", isComplete: false , isDay: true, class: "tdDayNotDisabled", isTravaille: true, bgColor: "white", dayOfWeek: dateTemp.getDay(), dayOfMonth: j, width: "10", height: "10", hasInput: "true", "input": {"type": "text", "size": 1}, hasImage: false, image: {}, disabled: false }';
          } else {
            jourText = '{ "id": "jour_" + j + "_" + "missionNumber", monId: monIdNb, hasErreur: false, ligneCraNumber: missionNumber, name: nb+"_d"+j, date: dateTemp, libelleDate: dateTemp.toString(), label: j, data: "", type: "string", value: "", isComplete: false , isDay: true, class: "tdDayNotDisabled", isTravaille: true, bgColor: "white", dayOfWeek: dateTemp.getDay(), dayOfMonth: j, width: "10", height: "10", hasInput: "true", "input": {"type": "text", "size": 1}, hasImage: false, image: {}, disabled: false }';
          }
        } else {
          jourText = '{ "id": "jour_" + j + "_" + "missionNumber", monId: false, hasErreur: false, ligneCraNumber: missionNumber, name: nb+"_d"+j, date: dateTemp, libelleDate: dateTemp.toString(), label: j, data: "", type: "string", value: "", isComplete: false , isDay: true, class: "tdDayDisabled", isTravaille: false, bgColor: "red", dayOfWeek: dateTemp.getDay(), dayOfMonth: j, width: "10", height: "10", hasInput: false, "input": {"type": "text", "size": 1}, hasImage: false, image: {}, disabled: true }';
        }
        jour = eval('(' + jourText + ')');
        dateTemp.setDate(dateTemp.getDate() + 1);
        $scope.ligneCra.push(jour);
      }
      $scope.lignesCra.push($scope.ligneCra);
    };

    $scope.addAbsence = function() {
      var nbDaysInMonth, k, dayOfWeek, dateTemp, absenceNumber, cell1Text, cell2Text, cell3Text, cell1, cell2, cell3, jour, jourText;
      nbDaysInMonth = new Date($scope.debutMois.getFullYear(), $scope.debutMois.getMonth() + 1, 0).getDate();
      dateTemp = new Date($scope.debutMois.getFullYear(), $scope.debutMois.getMonth(), $scope.debutMois.getDate());
      absenceNumber = $scope.lignesAbsence.length + 1;
      $scope.ligneAbsence = [];
      $scope.ligneAbsence.ligneAbsenceNumber = $scope.lignesCra.length +1;
      cell1Text = '{ "id": "cell_1"+"_"+"absenceNumber", ligneAbsenceNumber: absenceNumber, name: "", date: "", libelleDate: "", value: "", isComplete: false , isDay: false, label: "", data: "", class: "tdCell", hasInput: false, hasImage: true, image: { src: "images/remove.png", title: 10 }, isLabel: false, disabled: false , srcImage: "images/remove.png" }';
      cell1 = eval('(' + cell1Text + ')');
      $scope.ligneAbsence.push(cell1);
      cell2Text = '{ "id": "cell_2"+"_"+"absenceNumber", ligneAbsenceNumber: absenceNumber, name: "", date: "", libelleDate: "", value: "", isComplete: false , isDay: false, label: "type", data: "", class: "tdCell", hasInput: true, input: { type: "text", size: 10 }, hasImage: false, isLabel: true, disabled: false }';
      cell2 = eval('(' + cell2Text + ')');
      $scope.ligneAbsence.push(cell2);
      cell3Text = '{ "id": "cell_3"+"_"+"absenceNumber", ligneAbsenceNumber: absenceNumber, name: "", date: "", libelleDate: "", value: "", isComplete: false , isDay: false, label: "Description", data: "", class: "tdCell", hasInput: true, input: { type: "text", size: 20 }, hasImage: false, isLabel: true, disabled: false }';
      cell3 = eval('(' + cell3Text + ')');
      $scope.ligneAbsence.push(cell3);
      for (k = 1; k <= nbDaysInMonth; k++) {
        dayOfWeek = dateTemp.getDay();
        if (dayOfWeek > 0 && dayOfWeek < 6) {
          jourText = '{ "id": "abs_"+ k +"_"+"absenceNumber", ligneAbsenceNumber: absenceNumber, name: "", date: dateTemp, libelleDate: dateTemp.toString(), value: "", isComplete: false , isDay: true, label: k, data: "", class: "tdDayNotDisabled", hasInput: true, hasImage: false, isLabel: false, disabled: false }';
          jour = eval('(' + jourText + ')');
        } else {
          jourText = '{ "id": "abs_"+ k +"_"+"absenceNumber", ligneAbsenceNumber: absenceNumber, name: "", date: dateTemp, libelleDate: dateTemp.toString(), value: "", isComplete: false , isDay: true, label: k, data: "", class: "tdDayDisabled", hasInput: true, hasImage: false, isLabel: false, disabled: true }';
          jour = eval('(' + jourText+ ')');
        }
        $scope.ligneAbsence.push(jour);
        dateTemp.setDate(dateTemp.getDate() + 1);
      }
      $scope.lignesAbsence.push($scope.ligneAbsence);
    };

    $scope.submit = function () {
      window.alert(" submit ");
    };

    $scope.validDayForm = function(n) {
      var i;
    };

    $scope.save = function() {
      var formData = $scope.craForm;
    };

    $scope.initAbsenceHeaderForm = function(d1) {
      var nbJoursDsMois, i, j, dateTmp, nbDayInWeek;
      $scope.headerAbsence.push({ ligneAbsenceNumber: 0, "width": 100, "label": "", hasInput: false, hasImage: false, "data": "", class:"thHeaderCell1", "color":"blue", type: "label", disabled: false });
      $scope.headerAbsence.push({ ligneAbsenceNumber: 0, "width": 100, "label": "Type", hasInput: false, hasImage: false, "data": "Type", class:"thHeaderCell2", "color":"blue", type: "label", disabled: false });
      $scope.headerAbsence.push({ ligneAbsenceNumber: 0, "width": 100, "label": "Description", hasInput: false, hasImage: false, "data": "Description", class:"thHeaderCell3", "color":"blue", type: "myInput", disabled: false });
      nbJoursDsMois = new Date(2015, d1.getMonth() + 1, 0).getDate();
      dateTmp = new Date(d1);
      for (i = 1; i <= nbJoursDsMois; i++) {
        nbDayInWeek = dateTmp.getDay();
        if (nbDayInWeek > 0 && nbDayInWeek < 6) {
          $scope.headerAbsence.push({ ligneAbsenceNumber: 0, "width": 0, "label": i, hasInput: false, hasImage: false, data: i, class:"thHeaderCell", "color":"blue", type: "craInput", disabled: false });
        } else {
          $scope.headerAbsence.push({ ligneAbsenceNumber: 0, "width": 0, "label": i, hasInput: false, hasImage: false, data: i, class:"headerWe", "color":"blue", type: "red", disabled: true });
        }
        dateTmp.setDate(dateTmp.getDate() + 1);
      }$scope.headers.push($scope.headerAbsence);
    };

    

    $scope.initCraHeaderForm($scope.debutMois);
    $scope.addMissionToCraForm($scope.debutMois);
    $scope.initAbsenceHeaderForm($scope.debutMois);

    $scope.nbJoursTravail = function() {
      var n;
      $scope.nbJoursTravailles = 0;
      for (n = 2; n < $scope.lignesCra[0].length; n++) {

        if ($scope.ligneCra[n].data !==  "") {
          $scope.nbJoursTravailles += parseFloat($scope.lignesCra[0][n].data);
        }
      }
      return $scope.nbJoursTravailles;
    };

		$scope.calculNbJoursTravail = function() {
      var n, somme, sommeTotale, nombreCellules, nombreMission, indexMission;
      $scope.nbJoursTravailles = 0;
      nombreMission = $scope.lignesCra.length;
      sommeTotale = 0;
      for (n = 0; n < nombreMission; n++) {
        somme = 0;
        for (nombreCellules = 3; nombreCellules < $scope.lignesCra[n].length; nombreCellules++) {
          if (( $scope.lignesCra[n][nombreCellules].data !==  null) && ($scope.lignesCra[n][nombreCellules].data !==  "")) {
            somme += parseFloat($scope.lignesCra[n][nombreCellules].data);
          }
        }
        $scope.lignesCra[n].data = somme;
        sommeTotale += somme;
      }
      $scope.nbJoursTravailles = sommeTotale;
    };

    $scope.calculNbJoursNonTravailles = function() {
      var n, somme, sommeTotale, nombreCellules, nombreAbsence, indexeAbsence;
      $scope.nbJoursNonTravailles = 0;
      nombreAbsence = $scope.lignesAbsence.length;
      sommeTotale = 0;
      for (n = 0; n < nombreAbsence; n++) {
        somme = 0;
        for (nombreCellules = 3; nombreCellules < $scope.lignesAbsence[n].length; nombreCellules++) {
          if (( $scope.lignesAbsence[n][nombreCellules].data !==  null) && ($scope.lignesAbsence[n][nombreCellules].data !==  "")) {
            somme += parseFloat($scope.lignesAbsence[n][nombreCellules].data);
          }
        }
        $scope.lignesAbsence[n].data = somme;
        sommeTotale += somme;
      }
      $scope.nbJoursNonTravailles = sommeTotale;
    };
    $scope.nbJoursTravail = function() {
      var n, i, nbMissions, sum, nb;
      if ( (this.$parent.item.data === undefined) || (this.$parent.item.data === "")) {
        return;
      }
      nbMissions = $scope.lignesCra.length;
      sum = 0;
      if (this.$parent.item.data !==  ""){
        nb = parseFloat(this.$parent.item.data);
        if ( (isNaN(nb)) || (nb <0) || (nb > 1) ) {
          window.alert("Veuillez entrer un chiffre entre 0 et 1");
          this.$parent.item.data = "";
          return;
        }
      }
      for (i  = 0 ; i<$scope.lignesCra.length ;i++) {
        for (n = 2; n < $scope.lignesCra[i].length; n++) {
          if ($scope.lignesCra[i][n].data !==  "") {
            var t;
            t = parseFloat($scope.lignesCra[i][n].data);
            if ( (isNaN(t)) || (typeof t === "undefined")) {
              window.alert("Veuillez entrer un chiffre entre 0 et 1");
            }
            sum += t;
          }
        }
      }
      $scope.nbJoursTravailles = sum;
    };



    $scope.nbJoursReposs = function() {
      var n;
      $scope.nbJoursRepos = 0;
      for (n = 2; n < $scope.absences.length; n++) {

        if ($scope.absences[n].data !==  "") {
          $scope.nbJoursRepos += parseFloat($scope.absences[n].data);
        }
      }
      return $scope.nbJoursRepos;
    };

    $scope.headerFilter = function(header1) {
      return header1.disabled;
    };

  }]);

craEcranB.controller('craEcranBCtrl1',
  function ($scope) {
    $scope.debutMois = new Date(2015, 10, 1);
    $scope.nbJoursTravailles = 0;
    $scope.nbJoursNonTravailles = 0;
    $scope.nbJoursAbsences = 0;


  });

craEcranB.controller('essaiCtrl',
  function ($scope) {
    //$scope.debutMois = new Date(2015, 10, 1);
    //$scope.nbJoursTravailles = 0;
    //$scope.nbJoursNonTravailles = 0;
    //$scope.nbJoursAbsences = 0;


  });
