TabDT.Users = new Tabular.Table({
	'searching': true,
	'lengthChange': false,
	'info' : false,
	'pageLength' : 50,
	'order': [ 0, 'asc' ], // tri par nom croissant
	'language': config.french,
	 'fnInitComplete': function(oSettings, json){
		 $(this).find("thead tr").addClass("info");
	 },
	  name: "Joueurs",
	  collection: Meteor.users,
	  responsive: true,  // Responsive support https://github.com/aldeed/meteor-tabular/issues/201
	  autoWidth: false,  // Responsive support. prevent width:px
	  columns: [
	    {data: "username", title: "Joueur"},
	    {data: "createdAt", title: "Création"}
	  ]
	});
// /DATATABLES
