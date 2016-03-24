GladiatorPerks.before.insert(function (id, doc) {
	doc.createdAt = new Date();
});

// PRIVATE
var getGladiatorPerkAll = function() {
	return GladiatorPerks.find();
}

var getGladiatorPerk = function(idGladiatorPerk) {
	//	check(idGladiatorPerk, Number);
	return GladiatorPerks.findOne({ _id : idGladiatorPerk });
}

var addGladiatorPerk = function(userId, name, desc) {
	//check(userId, Meteor.users);
	//	check(name, String);
	//	check(desc, String);
	return GladiatorPerks.insert({
		name : name,
		desc : desc,
		createdAt : new Date(),
		owner : userId
	});
}

var delGladiatorPerk = function(idGladiatorPerk) {
	//	check(idGladiatorPerk, Number);
	GladiatorPerks.remove(idGladiatorPerk);
}

var updGladiatorPerkName = function(idGladiatorPerk, name) {
	//	check(idGladiatorPerk, Number);
	//	check(name, String);
	GladiatorPerks.update(idGladiatorPerk, {
		$set : {
			name : name
		}
	});
}

// PUBLIC
dalGladiatorPerks = {
		getAll : getGladiatorPerkAll,
		get : getGladiatorPerk,
		add : addGladiatorPerk,
		del : delGladiatorPerk,
		updName : updGladiatorPerkName		
}