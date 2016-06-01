//DATATABLES https://github.com/aldeed/meteor-tabular
//TabularTablesGladiators = {};
//Meteor.isClient && Template.registerHelper('TabularTablesGladiators', TabularTablesGladiators);

TabDT.Perks = new Tabular.Table({
	'searching': true,
	'lengthChange': false,
	'info' : false,
	'pageLength' : 50,
	'order': [ 1, 'desc' ], // tri par gloire decroissante
	'language': config.french,
	 'fnInitComplete': function(oSettings, json){
		 $(this).find("thead tr").addClass("info");
	 },
	  name: "Perks",
	  collection: Perks,
	  responsive: true,  // Responsive support https://github.com/aldeed/meteor-tabular/issues/201
	  autoWidth: false,  // Responsive support. prevent width:px
	  // Plus secure si filtre c�t� serveur
/*	  teamGlads: function(id) {
		  	console.log("selector=" + id);
		  	console.log("teamGlads=" + this._id);
		    return {teamId: id};
		  },
*/	  columns: [
	    {data: "code", title: "Code"},
	    {data: "name", title: "Trait"},
	    {data: "desc", title: "Description"},
	    {data: "nameClasse", title: "Classe"},
	    {data: "prerequis", title: "Prerequis", tmpl: Meteor.isClient && Template.operationsSimples, tmplContext : function(rowData) {
	    	return { val:rowData.prerequis, showCible:true };
	    }},
	    {data: "attributes.rap", title: "RAP"},
	    {data: "attributes.per", title: "PER"},
	    {data: "attributes.dex", title: "DEX"},
	    {data: "attributes.for", title: "FOR"},
	    {data: "attributes.res", title: "RES"},
	    {data: "attributes.men", title: "MEN"},
	    {data: "fightMisc.foc", title: "FOC"},
	    {data: "fightMisc.dan", title: "DAN"},
	    {data: "fightMisc.sur", title: "SUR"},
	    {data: "fightMisc.let", title: "LET"},
	    {data: "effects", title: "Effets", tmpl: Meteor.isClient && Template.operationsSimples, tmplContext : function(rowData) {
	    	return { val:rowData.effects, showCible:true };
	    }},
	    {
	    	// Bouton vendre
	        tmpl: Meteor.isClient && Template.editPerk
	    }
	  ]
	});
///DATATABLES

