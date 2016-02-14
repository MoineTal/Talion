Fights.before.insert(function (id, doc) {
	doc.createdAt = new Date();
	console.log('Fights.before.insert');
	//var gladiators = [];
	_.each(doc.gladiators, function(element, index, list) {
		var glad = Gladiators.findOne(element.idGladiator);
		var team = Teams.findOne(glad && glad.idTeam);
		var chapter = Chapters.findOne(team && team.idChapter);
		element.nameGladiator = glad && glad.name;
		element.idTeam = glad && glad.idTeam;
		element.nameTeam = team && team.name;
		element.idChapter = chapter && chapter._id;
		element.nameChapter = chapter && chapter.name;	
		element.ko = false;
		element.killed = false;
		//console.log(element);
		
		// sauvegarde des modifications
		list[index] = element;
		//gladiators.push(element);;
	});
	//doc.gladiators = gladiators;
	console.log('Fights.before.insert end');
	//console.log(doc);
/*	for(var i= 0; i < doc.teams.length; i++)
	{
		console.log(doc.teams[i].glads);
		for(var j= 0; j < doc.teams[i].glads.length; j++)
		{
			console.log(doc.teams[i].glads[j]);
			doc.teams[i].glads[j].ko = false;
			doc.teams[i].glads[j].ko = false;

			var glad = Gladiators.findOne(doc.teams[i].glads[j].idGladiator);
			var team = Teams.findOne(glad && glad.idTeam);
			var chapter = Chapters.findOne(team && team.idChapter);
			doc.teams[i].glads[j].nameGladiator = glad && glad.name;
			doc.teams[i].glads[j].idChapter = chapter && chapter._id;
			doc.teams[i].glads[j].nameChapter = chapter && chapter.name;
		}
		doc.teams[i].color = '9'; // TODO à générer selon l'indice du tableau
	}
	*/
});


Fights.after.insert(function(id, doc) {
/*	News.insert({
		parent : doc._id,
		body : 'Préparez-vous pour un nouveau combat entre : ' + doc.round,
		category : 'Arène',
		level : '1',
		targets : [doc._id],
		owner : doc.owner
	});	
	*/
});

FightTeams.before.insert(function (id, doc) {
	doc.createdAt = new Date();
	//doc.teams[i].color = '9'; // TODO à générer selon le nombre d'équipes déjà presentes dans le combat
});

FightGladiators.before.insert(function (id, doc) {
	doc.createdAt = new Date();
	var glad = Gladiators.findOne(doc.idGladiator);
	var team = Teams.findOne(glad && glad.idTeam);
	var chapter = Chapters.findOne(team && team.idChapter);
	doc.nameGladiator = glad && glad.name;
	// affectation des données de dénormalisation
	doc.idTeam = team && team._id;
	doc.nameTeam = team && team.name;
	doc.idChapter = chapter && chapter._id;
	doc.nameChapter = chapter && chapter.name;
});
//DATATABLES https://github.com/aldeed/meteor-tabular
//TabularTablesGladiators = {};
//Meteor.isClient && Template.registerHelper('TabularTablesGladiators', TabularTablesGladiators);


TabDT.Fights = new Tabular.Table({
	'searching': true,
	'lengthChange': false,
	'info' : false,
	'pageLength' : 50,
	'order': [ 1, 'desc' ], // tri par gloire decroissante
	'language': config.french,
	 'fnInitComplete': function(oSettings, json){
		 $(this).find("thead tr").addClass("info");
	 },
	  name: "Fights",
	  collection: Fights,
	  responsive: true,  // Responsive support https://github.com/aldeed/meteor-tabular/issues/201
	  autoWidth: false,  // Responsive support. prevent width:px
	  // Plus secure si filtre c�t� serveur
/*	  teamGlads: function(id) {
		  	console.log("selector=" + id);
		  	console.log("teamGlads=" + this._id);
		    return {teamId: id};
		  },
*/	  columns: [
  	    {data: "createdAt", title: "Date"},
	    {data: "round", title: "Round"},
	    {data: "gladiators", title: "gladiateurs",
	        render: function (val, type, doc) {
	        	// groupement par equipe
	        	var teams = _.groupBy(val, function(gladiator) {
	        		return gladiator.idFightTeam; // par id team
	        	});
	        	var retour = '';
	        	// parcours des equipes
	        	_.each(teams, function(value, key, list) {
	        		if(retour.length > 0) { retour += ' vs '; }
	        		retour += '[';
	        		var retourGlad = '';
		        	// parcours des gladiateurs
	        		_.each(value, function(element, index, list) {
		        		if(retourGlad.length > 0) { retourGlad += ', '; }
		        		retourGlad += element.nameGladiator;
		        	});
	        		retour += retourGlad;
	        		retour += ']';
	        	});
	        	
	        	return retour;
	          }
	    },
	    {
	    	// Bouton modifier
	        tmpl: Meteor.isClient && Template.editFight
	    }
	  ]
	});
///DATATABLES


