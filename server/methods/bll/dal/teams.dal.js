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