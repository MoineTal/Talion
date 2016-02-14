// denormalisation du nom de domaine
Classes.before.insert(function (id, doc) {
	console.log('Classes.before.insert ' + id);
	var domain = Domains.findOne(doc.idDomain);
	doc.nameDomain = domain && domain.name;
	doc.createdAt = new Date();

	if(doc.idClasseMaitre) {
		var classe = Classes.findOne(doc.idClasseMaitre);
		doc.nameClasseMaitre = classe && classe.name;
	}
});

Classes.after.insert(function(id, doc) {
	News.insert({
		parent : doc._id,
		body : 'Nouvelle classe disponible : ' + doc.name,
		category : 'Arène',
		level : '2',
		targets : [doc._id],
		owner : doc.owner
	});	
});

/*
Classes.after.insert(function (id, doc) {
});
*/

// DATATABLES https://github.com/aldeed/meteor-tabular
//TabularTablesGladiators = {};
//Meteor.isClient && Template.registerHelper('TabularTablesGladiators', TabularTablesGladiators);

TabDT.Classes = new Tabular.Table({
	'searching': true,
	'lengthChange': false,
	'info' : false,
	'pageLength' : 50,
	'order': [ 0, 'asc' ], // tri par nom de classe croissante
	'language': config.french,
	 'fnInitComplete': function(oSettings, json){
		 $(this).find("thead tr").addClass("info");
	 },
	  name: "Classes",
	  collection: Classes,
	  //pub : "dt_Classes",
	  responsive: true,  // Responsive support https://github.com/aldeed/meteor-tabular/issues/201
	  autoWidth: false,  // Responsive support. prevent width:px
	  columns: [
	    {data: "name", title: "Classe"},
	    {data: "desc", title: "Description"},
	    //{data: "idDomain", title: "Dom. id"},
	    {data: "nameDomain", title: "Domaine"},
	    {data: "nameClasseMaitre", title: "classe Maître"},
	    {
	    	// Bouton vendre
	        tmpl: Meteor.isClient && Template.editClasse
	    }
	  ]
	});
// /DATATABLES

