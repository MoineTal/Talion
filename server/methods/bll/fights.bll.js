// PRIVATE
var getFightAll = function() {
	return dalFights.getAll();
}

var getFight = function(idFight) {
	return dalFights.get(idFight);
}

var addFight = function(userId, round, gladiators) {
	return dalFights.add(userId, round, gladiators);
}

var delFight = function(idFight) {
	dalFights.del(idFight);
}

var updFightName = function(idFight, name) {
	dalFights.updName(idFight, name);
}

// PUBLIC
bllFights = {
		getAll : getFightAll,
		get : getFight,
		add : addFight,
		del : delFight,
		updName : updFightName		
}