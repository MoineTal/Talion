// PRIVATE
var getGladiatorClasseAll = function() {
	return GladiatorClasses.find();
}

var getGladiatorClasse = function(idGladiatorClasse) {
	//	check(idGladiatorClasse, Number);
	return GladiatorClasses.findOne({ _id : idGladiatorClasse });
}

var addGladiatorClasse = function(userId, name, foo) {
	//	check(name, String);
	//	check(foo, String);
	return GladiatorClasses.insert({
		name : name,
		foo : foo,
		createdAt : new Date(),
		owner : userId
	});
}

var delGladiatorClasse = function(idGladiatorClasse) {
	//	check(idGladiatorClasse, Number);
	GladiatorClasses.remove(idGladiatorClasse);
}

var updGladiatorClasseName = function(idGladiatorClasse, name) {
	//	check(idGladiatorClasse, Number);
	//	check(name, String);
	GladiatorClasses.update(idGladiatorClasse, {
		$set : {
			name : name
		}
	});
}

// PUBLIC
dalGladiatorClasses = {
		getAll : getGladiatorClasseAll,
		get : getGladiatorClasse,
		add : addGladiatorClasse,
		del : delGladiatorClasse,
		updName : updGladiatorClasseName		
}