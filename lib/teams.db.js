//DATATABLES https://github.com/aldeed/meteor-tabular
//TabularTablesTeams = {};
//Meteor.isClient && Template.registerHelper('TabularTablesTeams', TabularTablesTeams);

TabDT.Teams = new Tabular.Table({
	'searching': true,
	'lengthChange': false,
	'info' : false,
	'pageLength' : 50,
	'order': [ 2, 'desc' ], // tri par gloire decroissante
	'language': config.french,
	 'fnInitComplete': function(oSettings, json){
		 $(this).find("thead tr").addClass("info");
	 },
	  name: "Teams",
	  collection: Teams,
	  responsive: true,  // Responsive support https://github.com/aldeed/meteor-tabular/issues/201
	  autoWidth: false,  // Responsive support. prevent width:px
	  // TODO : recuperer l'equipe et l'utilisateur
	  columns: [
   	    /*{data: "classement()", title: "Cl."}, besoin de dburles:collection-helpers */
	    {data: "", title: "Cl.",
	        render: function (val, type, doc) {
	        	console.log(val);
	        	console.log(type);
	        	console.log(doc);
	        	return 1;
	          }},
	    {data: "name", title: "Equipe"},
	    {data: "desc", title: "Description"},
	    {data: "pause", title: "Inactive"},
	    {data: "nameChapter", title: "Chapitre"},
	    {data: "glory", title: "C&eacute;l&eacute;brit&eacute;"},
	    {data: "status", title: "Statut",
	        render: function (val, type, doc) {
	        	return "active";
	          }
	    },
	    {
	    	// Bouton vendre
	        tmpl: Meteor.isClient && Template.editTeam
	    }
	  ]
	});
// /DATATABLES
