// PRIVATE
var getGladiatorAll = function() {
	return Gladiators.find();
}

var getGladiator = function(idGladiator) {
	//	check(idGladiator, Number);
	return Gladiators.findOne({ _id : idGladiator });
}

var addGladiator = function(userId, name, desc, attributes,	pref, idTeam, idClasse) {
	console.log('dal.addGladiator ' + name);
	check(name, String);
	check(desc, String);
	check(attributes, Schema.Attributes);
	check(pref, String);
	check(idTeam, String);
	check(idClasse, String);
	return Gladiators.insert({
		name : name,
		desc : desc,
		attributes : attributes,
		pref : pref,
		idTeam : idTeam,
		idClasse : idClasse,
		owner : userId
	});
}

var delGladiator = function(idGladiator) {
	//	check(idGladiator, Number);
	Gladiators.remove(idGladiator);
}

var updGladiatorName = function(idGladiator, name) {
	//	check(idGladiator, Number);
	//	check(name, String);
	Gladiators.update(idGladiator, {
		$set : {
			name : name
		}
	}/*, function(error, result) {
		if (error) {
			throw error;
		}
	}*/
	);
}

var updGladiatorDesc = function(idGladiator, desc) {
	//	check(idGladiator, Number);
	//	check(desc, String);
	Gladiators.update(idGladiator, {
		$set : {
			desc : desc
		}
	});
}
// PUBLIC
dalGladiators = {
		getAll : getGladiatorAll,
		get : getGladiator,
		add : addGladiator,
		del : delGladiator,
		updName : updGladiatorName,		
		updDesc : updGladiatorDesc
}