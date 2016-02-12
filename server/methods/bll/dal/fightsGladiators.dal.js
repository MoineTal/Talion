/*// PRIVATE
var getFightGladiatorAll = function() {
	return FightGladiators.find();
}

var getFightGladiator = function(idFightGladiator) {
	//	check(idFightGladiator, Number);
	return FightGladiators.findOne({ _id : idFightGladiator });
}

var addFightGladiator = function(userId, idFightTeam, idGladiator) {
	//check(userId, Meteor.users);
	//	check(name, String);
	//	check(foo, String);
	return FightGladiators.insert({
		idFightTeam : idFightTeam,
		idGladiator : idGladiator,
		createdAt : new Date(),
		owner : userId
	});
}

var delFightGladiator = function(idFightGladiator) {
	//	check(idFightGladiator, Number);
	FightGladiators.remove(idFightGladiator);
}

var updFightGladiatorName = function(idFightGladiator, name) {
	//	check(idFightGladiator, Number);
	//	check(name, String);
	FightGladiators.update(idFightGladiator, {
		$set : {
			name : name
		}
	});
}

// PUBLIC
dalFightGladiators = {
		getAll : getFightGladiatorAll,
		get : getFightGladiator,
		add : addFightGladiator,
		del : delFightGladiator,
		updName : updFightGladiatorName		
}*/