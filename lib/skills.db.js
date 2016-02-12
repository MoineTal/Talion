Skills.before.insert(function (id, doc) {
	var classe = Classes.findOne(doc.idClasse);
	doc.nameClasse = classe && classe.name;
	doc.createdAt = new Date();
});

Skills.after.insert(function(id, doc) {
	var msg = 'Nouvelle compétence disponible ';
	if(doc.idClasse) {
		msg += 'pour la classe ' + doc.nameClasse + ' ';
	}
	News.insert({
		parent : doc._id,
		body : msg + ' : ' + doc.name,
		category : 'Arène',
		level : '2',
		targets : [doc._id],
		owner : doc.owner
	});	
});

//DATATABLES https://github.com/aldeed/meteor-tabular
//TabularTablesGladiators = {};
//Meteor.isClient && Template.registerHelper('TabularTablesGladiators', TabularTablesGladiators);

TabDT.Skills = new Tabular.Table({
	'searching': true,
	'lengthChange': false,
	'info' : false,
	'pageLength' : 50,
	'order': [ 1, 'desc' ], // tri par gloire decroissante
	'language': config.french,
	 'fnInitComplete': function(oSettings, json){
		 $(this).find("thead tr").addClass("info");
	 },
	  name: "Skills",
	  collection: Skills,
	  responsive: true,  // Responsive support https://github.com/aldeed/meteor-tabular/issues/201
	  autoWidth: false,  // Responsive support. prevent width:px
	  // Plus secure si filtre c�t� serveur
/*	  teamGlads: function(id) {
		  	console.log("selector=" + id);
		  	console.log("teamGlads=" + this._id);
		    return {teamId: id};
		  },
*/	  columns: [
	    {data: "name", title: "Nom"},
	    {data: "desc", title: "Description"},
	    {data: "verb", title: "Verbe"},
	    {data: "action", title: "Action"},
	    {data: "active", title: "active"},
	    {data: "nameClasse", title: "Classe"},
	    {data: "type", title: "Type"},
	    {data: "initlvl", title: "Niveau"},
	    {data: "prerequis", title: "Prerequis", tmpl: Meteor.isClient && Template.operationsSimples, tmplContext : function(rowData) {
	    	return { val:rowData.prerequis, showCible:true };
	    }},
	    {data: "targetingEffects", title: "Ciblage", tmpl: Meteor.isClient && Template.operationsEgalite, tmplContext : function(rowData) {
	    	return { val:rowData.targetingEffects, showCible:true };
	    }},
	    {data: "effects", title: "Effets", tmpl: Meteor.isClient && Template.operationsEgalite, tmplContext : function(rowData) {
	    	return { val:rowData.effects, showCible:true };
	    }},
	    {data: "effects", title: "EffetsVal", tmpl: Meteor.isClient && Template.operationsValEgalite, tmplContext : function(rowData) {
	    	return { val:rowData.effects, showCible:true };
	    }},
	    {data: "tests", title: "Tests", tmpl: Meteor.isClient && Template.operationsSimples, tmplContext : function(rowData) {
	    	return { val:rowData.tests, showCible:true };
	    }},
	    {data: "succesEffects", title: "Effets Réussite", tmpl: Meteor.isClient && Template.operationsEgalite, tmplContext : function(rowData) {
	    	return { val:rowData.succesEffects, showCible:true };
	    }},
	    {
	    	// Bouton vendre
	        tmpl: Meteor.isClient && Template.editSkill
	    }
	  ]
	});
///DATATABLES

