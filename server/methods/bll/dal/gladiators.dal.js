Gladiators.before.insert(function (id, doc) {
	doc.status = config.gladiators.status.LIBRE;
	doc.glory = config.gladiators.INIT_GLORY;
	doc.career = config.gladiators.INIT_CAREER;
	doc.vitality = config.gladiators.INIT_VITALITY;
	doc.fightsData = {};
	doc.fightsData.wins = config.gladiators.fightData.INIT_WINS;
	doc.fightsData.draws = config.gladiators.fightData.INIT_DRAWS;
	doc.fightsData.defeats = config.gladiators.fightData.INIT_DEFEATS;
	doc.fightsData.kos = config.gladiators.fightData.INIT_KOS;
	doc.fightsData.kills = config.gladiators.fightData.INIT_KILLS;
	doc.createdAt = new Date();
	
	var classe = Classes.findOne(doc.idClasse);
	doc.nameClasse = classe && classe.name;
	var team = Teams.findOne(doc.idTeam);
	doc.nameTeam = team && team.name;
	var chapter = Chapters.findOne(team && team.idChapter);
	doc.nameChapter = chapter && chapter.name;
});

Gladiators.after.insert(function(id, doc) {
	News.insert({
		parent : doc._id,
		body : doc.name + ' rejoint votre équipe !',
		category : 'Gladiateur',
		level : '1',
		targets : [doc._id],
		owner : doc.owner
	});	

	News.insert({
		parent : doc._id,
		body : 'Recrutement du combattant  ' + doc.name,
		category : 'Equipe',
		level : '2',
		targets : [doc._id],
		owner : doc.owner
	});	

	News.insert({
		parent : doc._id,
		body : 'L\'équipe ' + doc.nameTeam + ' vient de recruter ' + doc.name + '.',
		category : 'Arène',
		level : '1',
		targets : [doc._id],
		owner : doc.owner
	});
	
	// ajout des competences de classe
	var classeSkills = bllSkills.getByClasse(doc.idClasse);
	classeSkills.forEach(function(element) {		
		bllGladiatorSkills.add(doc.owner, doc._id, element._id, element.initLvl);
	});

});

Gladiators.after.update(function(id, doc) {
//	Fights.update({ idGladiator : doc._id }, {$set : { nameGladiator : doc.name }});	
//	Gladiators.update({ idGladiatorkilledBy : doc._id }, {$set : { nameGladiator : doc.name }});	
});

// PRIVATE
var getGladiatorAll = function() {
	return Gladiators.find();
}

var getGladiator = function(idGladiator) {
	//	check(idGladiator, Number);
	return Gladiators.findOne({ _id : idGladiator });
}

var addGladiator = function(userId, name, desc, attributes,	pref, idTeam, idClasse) {
	console.log('dal.addGladiator ' + name);
	check(name, String);
	check(desc, String);
	check(attributes, Schema.Attributes);
	check(pref, String);
	check(idTeam, String);
	check(idClasse, String);
	return Gladiators.insert({
		name : name,
		desc : desc,
		attributes : attributes,
		pref : pref,
		idTeam : idTeam,
		idClasse : idClasse,
		owner : userId
	});
}

var delGladiator = function(idGladiator) {
	//	check(idGladiator, Number);
	Gladiators.remove(idGladiator);
}

var updGladiatorName = function(idGladiator, name) {
	//	check(idGladiator, Number);
	//	check(name, String);
	Gladiators.update(idGladiator, {
		$set : {
			name : name
		}
	}/*, function(error, result) {
		if (error) {
			throw error;
		}
	}*/
	);
}

var updGladiatorDesc = function(idGladiator, desc) {
	//	check(idGladiator, Number);
	//	check(desc, String);
	Gladiators.update(idGladiator, {
		$set : {
			desc : desc
		}
	});
}
// PUBLIC
dalGladiators = {
		getAll : getGladiatorAll,
		get : getGladiator,
		add : addGladiator,
		del : delGladiator,
		updName : updGladiatorName,		
		updDesc : updGladiatorDesc
}