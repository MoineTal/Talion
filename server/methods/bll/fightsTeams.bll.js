/*// PRIVATE
var getFightTeamAll = function() {
	return dalFightTeams.getAll();
}

var getFightTeam = function(idFightTeam) {
	check(idFightTeam, String);
	return dalFightTeams.get(idFightTeam);
}

var addFightTeam = function(userId, idFight, color) {
	//check(userId, Meteor.users);
	check(idFight, String);
	check(color, String);
	return dalFightTeams.add(userId, idFight, color);
}

var delFightTeam = function(idFightTeam) {
	check(idFightTeam, String);
	dalFightTeams.del(idFightTeam);
}

// PUBLIC
bllFightTeams = {
		getAll : getFightTeamAll,
		get : getFightTeam,
		add : addFightTeam,
		del : delFightTeam		
}*/