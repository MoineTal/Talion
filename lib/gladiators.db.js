// DATATABLES https://github.com/aldeed/meteor-tabular
//TabularTablesGladiators = {};
//Meteor.isClient && Template.registerHelper('TabularTablesGladiators', TabularTablesGladiators);

TabDT.TeamGladiators = new Tabular.Table({
	'searching': true,
	'lengthChange': false,
	'info' : false,
	'pageLength' : 50,
	'order': [ 1, 'desc' ], // tri par gloire decroissante
	'language': config.french,
	 'fnInitComplete': function(oSettings, json){
		 $(this).find("thead tr").addClass("info");
	 },
	  name: "TeamGladiators",
	  collection: Gladiators,
	  responsive: true,  // Responsive support https://github.com/aldeed/meteor-tabular/issues/201
	  autoWidth: false,  // Responsive support. prevent width:px
	  // Plus secure si filtre c�t� serveur
/*	  teamGlads: function(id) {
		  	console.log("selector=" + id);
		  	console.log("teamGlads=" + this._id);
		    return {teamId: id};
		  },
*/	  columns: [
	    {data: "name", title: "Gladiateur"},
	    {data: "nameClasse", title: "Classe"},
	    {data: "glory", title: "C&eacute;l&eacute;brit&eacute;"},
	    {data: "vitality", title: "Vitalit&eacute;"},
	    {data: "career", title: "Carri&egrave;re"},
	    {data: "attributes.rap", title: "RAP"},
	    {data: "attributes.per", title: "PER"},
	    {data: "attributes.dex", title: "DEX"},
	    {data: "attributes.for", title: "FOR"},
	    {data: "attributes.res", title: "RES"},
	    {data: "attributes.men", title: "MEN"},
	    {data: "career", title: "Vedette"},
	    {data: "career", title: "Etoile montante"},
	    /*	    {data: "status", title: "Statut"},*/
	    {data: "status", title: "Statut",
	        render: function (val, type, doc) {
	        	return getStatusName(val);
	          }
	    },
	    {
	    	// Bouton vendre
	        tmpl: Meteor.isClient && Template.sellTeamGlad
	    }
	  ]
	});

TabDT.MyGladiators = new Tabular.Table({
	'searching': true,
	'lengthChange': false,
	'info' : false,
	'pageLength' : 50,
	'order': [ 1, 'desc' ], // tri par gloire decroissante
	'language': config.french,
	 'fnInitComplete': function(oSettings, json){
		 $(this).find("thead tr").addClass("info");
	 },
	  name: "MyGladiators",
	  collection: Gladiators,
	  responsive: true,  // Responsive support https://github.com/aldeed/meteor-tabular/issues/201
	  autoWidth: false,  // Responsive support. prevent width:px
	  // Plus secure si filtre c�t� serveur
/*	  teamGlads: function(id) {
		  	console.log("selector=" + id);
		  	console.log("teamGlads=" + this._id);
		    return {teamId: id};
		  },
*/	  columns: [
  	  	    {data: "", title: "Cl.",
  		        render: function (val, type, doc) {
  		        	return 1;
  		          }},
  	  	    {data: "name", title: "Gladiateur"},
  		    {data: "nameClasse", title: "Classe"},
  		    {data: "glory", title: "C&eacute;l&eacute;brit&eacute;"},
  		    {data: "fightsData.wins", title: "Vic."},
  		    {data: "fightsData.draws", title: "Nul"},
  		    {data: "fightsData.defeats", title: "Def."},
  		    {data: "fightsData.kos", title: "KO"},
  		    {data: "fightsData.kills", title: "Meurtres"},
  		    {data: "nameTeam", title: "Equipe"},
  		    {data: "nameChapter", title: "Chapitre" },
 		    {data: "career", title: "Carri&egrave;re"},
  		    {data: "status", title: "Statut" },
	    {
	    	// Bouton vendre
	        tmpl: Meteor.isClient && Template.editGladiator
	    }
	  ]
	});


var classement = 1;
TabDT.Gladiators = new Tabular.Table({
	'searching': true,
	'lengthChange': false,
	'info' : false,
	'pageLength' : 50,
	'order': [ 2, 'desc' ], // tri par gloire decroissante
	'language': config.french,
	 'fnInitComplete': function(oSettings, json){
		 $(this).find("thead tr").addClass("info");
		 //classement = 1;
	 },
	 "fnRowCallback" : function(nRow, aData, iDisplayIndex){
		 classement = iDisplayIndex;
         //$("td:first", nRow).html(iDisplayIndex +1);
        return nRow;
     },
	  name: "Gladiators",
	  collection: Gladiators,
	  responsive: true,  // Responsive support https://github.com/aldeed/meteor-tabular/issues/201
	  autoWidth: false,  // Responsive support. prevent width:px
	  // TODO : recuperer l'equipe et l'utilisateur
	  columns: [
   	    //{data: "classement()", title: "Cl."}, besoin de dburles:collection-helpers 
	    {data: "", title: "Cl.",
	        render: function (val, type, doc) {
	        	console.log(val);
	        	console.log(type);
	        	console.log(doc);
	        	return classement;
	          }},
	    {data: "name", title: "Gladiateur"},
	    {data: "nameClasse", title: "Classe"},
	    {data: "glory", title: "C&eacute;l&eacute;brit&eacute;"},
	    {data: "fightsData.wins", title: "Vic."},
	    {data: "fightsData.draws", title: "Nul"},
	    {data: "fightsData.defeats", title: "Def."},
	    {data: "fightsData.kos", title: "KO"},
	    {data: "fightsData.kills", title: "Meurtres"},
	    {data: "career", title: "Carri&egrave;re"},
	    {data: "status", title: "Statut",
	        render: function (val, type, doc) {
	        	return getStatusName(val);
	          }
	    }
	  ]
	});

// /DATATABLES

