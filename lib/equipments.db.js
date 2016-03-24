// DATATABLES https://github.com/aldeed/meteor-tabular
//TabularTablesGladiators = {};
//Meteor.isClient && Template.registerHelper('TabularTablesGladiators', TabularTablesGladiators);

TabDT.Equipments = new Tabular.Table({
	'searching': true,
	'lengthChange': false,
	'info' : false,
	'pageLength' : 50,
	'order': [ 1, 'desc' ], // tri par gloire decroissante
	'language': config.french,
	 'fnInitComplete': function(oSettings, json){
		 $(this).find("thead tr").addClass("info");
	 },
	  name: "Equipments",
	  collection: Equipments,
	  responsive: true,  // Responsive support https://github.com/aldeed/meteor-tabular/issues/201
	  autoWidth: false,  // Responsive support. prevent width:px
	  // Plus secure si filtre c�t� serveur
/*	  teamGlads: function(id) {
		  	console.log("selector=" + id);
		  	console.log("teamGlads=" + this._id);
		    return {teamId: id};
		  },
*/	  columns: [
	    {data: "name", title: "Equipment"},
	    {data: "nameClasse", title: "Classe"},
	    {data: "prerequis", title: "Prerequis",
	        render: function (val, type, doc) {
	        	return "";/*getModAttributesMessage(doc.prerequis);*/	        	
	        }
	    },
	    {data: "caracteristics", title: "Caractéristiques",
	        render: function (val, type, doc) {
	        	return getModCaracsMessage(val);
	        }
	    },
	    {data: "caracteristics.vitesse", title: "VIT"},
	    {data: "caracteristics.esquive", title: "ESQ"},
	    {data: "caracteristics.precision", title: "PRE"},
	    {data: "caracteristics.puissance", title: "PUI"},
	    {data: "caracteristics.volonte", title: "VOL"},
	    {data: "caracteristics.armure", title: "ARM"},
	    {data: "caracteristics.vie", title: "VIE"},
	    {data: "caracteristics.souffle", title: "SOU"},
	    {data: "caracteristics.moral", title: "MOR"},
	    {data: "effects", title: "Spécial"},
	    {
	    	// Bouton vendre
	        tmpl: Meteor.isClient && Template.editEquipment
	    }
	  ]
	});
// /DATATABLES

