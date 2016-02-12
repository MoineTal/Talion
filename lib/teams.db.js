/*Teams.after.find(function (userId, selector, options, cursor) {
});*/
	
Teams.before.insert(function (id, doc) {
	doc.createdAt = new Date();
	var chapter = Chapters.findOne(doc.idChapter);
	doc.nameChapter = chapter && chapter.name;
	doc.pause = false;
	doc.gold = config.team.INIT_GOLD;
	doc.maxGlad = config.team.INIT_MAX_GLAD;
});

Teams.after.insert(function(id, doc) {
	News.insert({
		parent : doc._id,
		body : 'Création de l\'équipe ' + doc.name,
		category : 'Equipe',
		level : '1',
		targets : [doc._id],
		owner : doc.owner
	});	
});

Teams.after.update(function(id, doc) {
	Gladiators.update({ idTeam : doc._id }, {$set : { nameTeam : doc.name }});	
});

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
