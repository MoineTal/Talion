// PRIVATE
var getGladiatorAll = function() {
	return dalGladiators.getAll();
}

var getGladiator = function(idGladiator) {
	return dalGladiators.get(idGladiator);
}

var addGladiator = function(userId, name, desc, attributes,	pref, idTeam, idClasse) {
	return dalGladiators.add(userId, name, desc, attributes, pref, idTeam, idClasse);
}

var delGladiator = function(idGladiator) {
	dalGladiators.del(idGladiator);
}

var updGladiatorName = function(idGladiator, name) {
	dalGladiators.updName(idGladiator, name);
}

var updGladiatorDesc = function(idGladiator, desc) {
	dalGladiators.updName(idGladiator, desc);
}

// PUBLIC
bllGladiators = {
		getAll : getGladiatorAll,
		get : getGladiator,
		add : addGladiator,
		del : delGladiator,
		updName : updGladiatorName,		
		updDesc : updGladiatorDesc		
}