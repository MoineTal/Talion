// PRIVATE
var getTeamAll = function() {
	return dalTeams.getAll();
}

var getTeam = function(idTeam) {
	check(idTeam, String);
	return dalTeams.get(idTeam);
}

var addTeam = function(userId, name, desc, idChapter) {
	check(name, String);
	check(desc, String);
	//check(idChapter, String);
	return dalTeams.add(userId, name, desc, idChapter);
}

var delTeam = function(idTeam) {
	check(idTeam, String);
	dalTeams.del(idTeam);
}

var updTeamName = function(idTeam, name) {
	check(idTeam, String);
	check(name, String);
	dalTeams.updName(idTeam, name);
}

var updTeamDesc = function(idTeam, desc) {
	check(idTeam, String);
	check(desc, String);
	dalTeams.updDesc(idTeam, desc);
}

var updTeamGold = function(idTeam, gold) {
	check(idTeam, String);
	check(gold, Number);
	dalTeams.updDesc(idTeam, gold);
}

// PUBLIC
bllTeams = {
		getAll : getTeamAll,
		get : getTeam,
		add : addTeam,
		del : delTeam,
		updName : updTeamName,		
		updDesc : updTeamDesc,	
		updGold : updTeamGold	
}