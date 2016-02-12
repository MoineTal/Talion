// PRIVATE
var getGladiatorClasseAll = function() {
	return dalGladiatorClasses.getAll();
}

var getGladiatorClasse = function(idGladiatorClasse) {
	return dalGladiatorClasses.get(idGladiatorClasse);
}

var addGladiatorClasse = function(userId, name, desc) {
	return dalGladiatorClasses.add(userId, name, desc);
}

var delGladiatorClasse = function(idGladiatorClasse) {
	dalGladiatorClasses.del(idGladiatorClasse);
}

var updGladiatorClasseName = function(idGladiatorClasse, name) {
	dalGladiatorClasses.updName(idGladiatorClasse, name);
}

// PUBLIC
bllGladiatorClasses = {
		getAll : getGladiatorClasseAll,
		get : getGladiatorClasse,
		add : addGladiatorClasse,
		del : delGladiatorClasse,
		updName : updGladiatorClasseName		
}