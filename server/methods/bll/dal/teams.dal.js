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

// PRIVATE
var getTeamAll = function() {
	return Teams.find();
}

var getTeam = function(idTeam) {
	//	check(idTeam, Number);
	return Teams.findOne({ _id : idTeam });
}

var addTeam = function(userId, name, desc, idChapter) {
	console.log('dal.addTeam ' + name);
	//check(userId, Meteor.users);
	//	check(name, String);
	//	check(desc, String);
	return Teams.insert({
		name : name,
		desc : desc,
		idChapter : idChapter,
		createdAt : new Date(),
		owner : userId
	});
}

var delTeam = function(idTeam) {
	//	check(idTeam, Number);
	Teams.remove(idTeam);
}

var updTeamName = function(idTeam, name) {
	//	check(idTeam, Number);
	//	check(name, String);
	Teams.update(idTeam, {
		$set : {
			name : name
		}
	});
}

var updTeamDesc = function(idTeam, desc) {
	//	check(idTeam, Number);
	//	check(name, String);
	Teams.update(idTeam, {
		$set : {
			desc : desc
		}
	});
}

var updTeamGold = function(idTeam, gold) {
	//	check(idTeam, Number);
	//	check(gold, Number);
	Teams.update(idTeam, {
		$inc : {
			gold : gold
		}
	});
}

// PUBLIC
dalTeams = {
		getAll : getTeamAll,
		get : getTeam,
		add : addTeam,
		del : delTeam,
		updName : updTeamName,		
		updDesc : updTeamDesc,	
		updGold : updTeamGold	
}