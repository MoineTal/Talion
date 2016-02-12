GladiatorEquipments.before.insert(function (id, doc) {
	doc.createdAt = new Date();
});

//DATATABLES https://github.com/aldeed/meteor-tabular
//TabularTablesGladiators = {};
//Meteor.isClient && Template.registerHelper('TabularTablesGladiators', TabularTablesGladiators);

TabDT.GladiatorEquipments = new Tabular.Table({
	'searching': true,
	'lengthChange': false,
	'info' : false,
	'pageLength' : 50,
	'order': [ 1, 'desc' ], // tri par gloire decroissante
	'language': config.french,
	 'fnInitComplete': function(oSettings, json){
		 $(this).find("thead tr").addClass("info");
	 },
	  name: "GladiatorEquipments",
	  collection: GladiatorEquipments,
	  responsive: true,  // Responsive support https://github.com/aldeed/meteor-tabular/issues/201
	  autoWidth: false,  // Responsive support. prevent width:px
	  // Plus secure si filtre c�t� serveur
/*	  teamGlads: function(id) {
		  	console.log("selector=" + id);
		  	console.log("teamGlads=" + this._id);
		    return {teamId: id};
		  },
*/	  columns: [
  	    {data: "gladId", title: "Gladiateur"},
  	    {data: "teamId", title: "Equipe"},
	    {data: "equiId", title: "Equipment"},
	    {
	    	// Bouton vendre
	        tmpl: Meteor.isClient && Template.editGladiatorEquipment
	    }
	  ]
	});
///DATATABLES

