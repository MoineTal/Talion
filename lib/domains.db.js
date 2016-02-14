Domains.before.insert(function (id, doc) {
	doc.createdAt = new Date();
});

Domains.after.insert(function(id, doc) {
	News.insert({
		parent : doc._id,
		body : 'Nouveau domaine disponible : ' + doc.name,
		category : 'Arène',
		level : '3',
		targets : [doc._id],
		owner : doc.owner
	});	
});

//denormalisation du nom de domaine
Domains.after.update(function (userId, doc, fieldNames, modifier, options) {
	console.log('Domains.after.update ' + userId);
	console.log(fieldNames);
	
	Classes.update({ idDomain : doc._id}, 
		{ $set : { nameDomain : doc.name }
		}, 
		{ multi: true }
	);
});

// DATATABLES https://github.com/aldeed/meteor-tabular
//TabularTablesGladiators = {};
//Meteor.isClient && Template.registerHelper('TabularTablesGladiators', TabularTablesGladiators);

TabDT.Domains = new Tabular.Table({
	'searching': true,
	'lengthChange': false,
	'info' : false,
	'pageLength' : 50,
	'order': [ 1, 'desc' ], // tri par gloire decroissante
	'language': config.french,
	 'fnInitComplete': function(oSettings, json){
		 $(this).find("thead tr").addClass("info");
	 },
	  name: "Domains",
	  collection: Domains,
	  responsive: true,  // Responsive support https://github.com/aldeed/meteor-tabular/issues/201
	  autoWidth: false,  // Responsive support. prevent width:px
	  // Plus secure si filtre c�t� serveur
/*	  teamGlads: function(id) {
		  	console.log("selector=" + id);
		  	console.log("teamGlads=" + this._id);
		    return {teamId: id};
		  },
*/	  columns: [
	    {data: "name", title: "Domaine"},
	    {data: "desc", title: "Description"},
	    {
	    	// Bouton vendre
	        tmpl: Meteor.isClient && Template.editDomain
	    }
	  ]
	});
// /DATATABLES

