FightTeams.before.insert(function (id, doc) {
	doc.createdAt = new Date();
	//doc.teams[i].color = '9'; // TODO à générer selon le nombre d'équipes déjà presentes dans le combat
});


/*// PRIVATE
var getFightTeamAll = function() {
	return FightTeams.find();
}

var getFightTeam = function(idFightTeam) {
	//	check(idFightTeam, Number);
	return FightTeams.findOne({ _id : idFightTeam });
}

var addFightTeam = function(userId, idFight, color) {
	//check(userId, Meteor.users);
	//	check(name, String);
	//	check(foo, String);
	return FightTeams.insert({
		idFight : idFight,
		color : color,
		createdAt : new Date(),
		owner : userId
	});
}

var delFightTeam = function(idFightTeam) {
	//	check(idFightTeam, Number);
	FightTeams.remove(idFightTeam);
}

var updFightTeamName = function(idFightTeam, name) {
	//	check(idFightTeam, Number);
	//	check(name, String);
	FightTeams.update(idFightTeam, {
		$set : {
			name : name
		}
	});
}

// PUBLIC
dalFightTeams = {
		getAll : getFightTeamAll,
		get : getFightTeam,
		add : addFightTeam,
		del : delFightTeam,
		updName : updFightTeamName		
}*/