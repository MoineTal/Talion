GladiatorSkills.before.insert(function (id, doc) {
	doc.createdAt = new Date();
	var glad = Gladiators.findOne(doc.idGladiator);
	var skill = Skills.findOne(doc.idSkill);
	doc.nameGladiator = glad.name;
	doc.nameSkill = skill.name;
});


//DATATABLES https://github.com/aldeed/meteor-tabular
//TabularTablesGladiators = {};
//Meteor.isClient && Template.registerHelper('TabularTablesGladiators', TabularTablesGladiators);

TabDT.GladiatorSkills = new Tabular.Table({
	'searching': true,
	'lengthChange': false,
	'info' : false,
	'pageLength' : 50,
	'order': [ 1, 'desc' ], // tri par gloire decroissante
	'language': config.french,
	 'fnInitComplete': function(oSettings, json){
		 $(this).find("thead tr").addClass("info");
	 },
	  name: "GladiatorSkills",
	  collection: GladiatorSkills,
	  responsive: true,  // Responsive support https://github.com/aldeed/meteor-tabular/issues/201
	  autoWidth: false,  // Responsive support. prevent width:px
	  // Plus secure si filtre c�t� serveur
/*	  teamGlads: function(id) {
		  	console.log("selector=" + id);
		  	console.log("teamGlads=" + this._id);
		    return {teamId: id};
		  },
*/	  columns: [
	    {data: "nameGladiator", title: "Gladiateur"},
	    {data: "nameSkill", title: "Compétence"},
	    {data: "lvl", title: "Niveau"},
	    {
	    	// Bouton vendre
	        tmpl: Meteor.isClient && Template.editGladiatorSkill
	    }
	  ]
	});
///DATATABLES

