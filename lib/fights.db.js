//DATATABLES https://github.com/aldeed/meteor-tabular
//TabularTablesGladiators = {};
//Meteor.isClient && Template.registerHelper('TabularTablesGladiators', TabularTablesGladiators);


TabDT.Fights = new Tabular.Table({
	'searching': true,
	'lengthChange': false,
	'info' : false,
	'pageLength' : 50,
	'order': [ 1, 'desc' ], // tri par gloire decroissante
	'language': config.french,
	 'fnInitComplete': function(oSettings, json){
		 $(this).find("thead tr").addClass("info");
	 },
	  name: "Fights",
	  collection: Fights,
	  responsive: true,  // Responsive support https://github.com/aldeed/meteor-tabular/issues/201
	  autoWidth: false,  // Responsive support. prevent width:px
	  // Plus secure si filtre c�t� serveur
/*	  teamGlads: function(id) {
		  	console.log("selector=" + id);
		  	console.log("teamGlads=" + this._id);
		    return {teamId: id};
		  },
*/	  columns: [
  	    {data: "createdAt", title: "Date"},
	    {data: "round", title: "Round"},
	    {data: "gladiators", title: "gladiateurs",
	        render: function (val, type, doc) {
	        	// groupement par equipe
	        	var teams = _.groupBy(val, function(gladiator) {
	        		return gladiator.idFightTeam; // par id team
	        	});
	        	var retour = '';
	        	// parcours des equipes
	        	_.each(teams, function(value, key, list) {
	        		if(retour.length > 0) { retour += ' vs '; }
	        		retour += '[';
	        		var retourGlad = '';
		        	// parcours des gladiateurs
	        		_.each(value, function(element, index, list) {
		        		if(retourGlad.length > 0) { retourGlad += ', '; }
		        		retourGlad += element.nameGladiator;
		        	});
	        		retour += retourGlad;
	        		retour += ']';
	        	});
	        	
	        	return retour;
	          }
	    },
	    {
	    	// Bouton modifier
	        tmpl: Meteor.isClient && Template.editFight
	    }
	  ]
	});
///DATATABLES


