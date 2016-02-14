/*// PRIVATE
var getFightGladiatorAll = function() {
	return dalFightGladiators.getAll();
}

var getFightGladiator = function(idFightGladiator) {
	check(idFightGladiator, String);
	return dalFightGladiators.get(idFightGladiator);
}

var addFightGladiator = function(userId, idFightTeam, idGladiator) {
	//check(userId, Meteor.users);
	check(idFightTeam, String);
	check(idGladiator, String);
	return dalFightGladiators.add(userId, idFightTeam, idGladiator);
}

var delFightGladiator = function(idFightGladiator) {
	check(idFightGladiator, String);
	dalFightGladiators.del(idFightGladiator);
}

var updFightGladiatorName = function(idFightGladiator, name) {
	check(idFightGladiator, String);
	check(name, String);
	dalFightGladiators.updName(idFightGladiator, name);
}

// PUBLIC
bllFightGladiators = {
		getAll : getFightGladiatorAll,
		get : getFightGladiator,
		add : addFightGladiator,
		del : delFightGladiator,
		updName : updFightGladiatorName		
}*/