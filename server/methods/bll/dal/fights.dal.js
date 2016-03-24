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

// PRIVATE
var getFightAll = function() {
	return Fights.find();
}

var getFight = function(idFight) {
	//	check(idFight, Number);
	return Fights.findOne({ _id : idFight });
}

var addFight = function(userId, round, gladiators) {
	console.log('dal.addFight ');
	check(round, Number);
	//check(teams, [Schema.FightTeam]);
	return Fights.insert({
		round : round,
		gladiators : gladiators
	});
}

var delFight = function(idFight) {
	//	check(idFight, Number);
	Fights.remove(idFight);
}

var updFightName = function(idFight, name) {
	//	check(idFight, Number);
	//	check(name, String);
	Fights.update(idFight, {
		$set : {
			name : name
		}
	});
}

// PUBLIC
dalFights = {
		getAll : getFightAll,
		get : getFight,
		add : addFight,
		del : delFight,
		updName : updFightName		
}