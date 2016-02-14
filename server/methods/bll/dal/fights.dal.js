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