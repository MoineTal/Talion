// PRIVATE
var getGladiatorPerkAll = function() {
	return dalGladiatorPerks.getAll();
}

var getGladiatorPerk = function(idGladiatorPerk) {
	return dalGladiatorPerks.get(idGladiatorPerk);
}

var addGladiatorPerk = function(userId, name, desc) {
	return dalGladiatorPerks.add(userId, name, desc);
}

var delGladiatorPerk = function(idGladiatorPerk) {
	dalGladiatorPerks.del(idGladiatorPerk);
}

var updGladiatorPerkName = function(idGladiatorPerk, name) {
	dalGladiatorPerks.updName(idGladiatorPerk, name);
}

// PUBLIC
bllGladiatorPerks = {
		getAll : getGladiatorPerkAll,
		get : getGladiatorPerk,
		add : addGladiatorPerk,
		del : delGladiatorPerk,
		updName : updGladiatorPerkName		
}