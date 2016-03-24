Perks.before.insert(function (id, doc) {
	doc.createdAt = new Date();
});

// PRIVATE
var getPerkAll = function() {
	return Perks.find();
}

var getPerk = function(idPerk) {
	//	check(idPerk, Number);
	return Perks.findOne({ _id : idPerk });
}

var addPerk = function(userId, name, desc, idClasse, prerequis, attributes, fightMisc, effects) {
	//check(userId, Meteor.users);
	check(name, String);
	check(desc, String);
	return Perks.insert({
		name : name,
		desc : desc,
		prerequis : prerequis,
		attributes : attributes,
		fightMisc: fightMisc,
		effects : effects,
		createdAt : new Date(),
		owner : userId
	});
}

var delPerk = function(idPerk) {
	//	check(idPerk, Number);
	Perks.remove(idPerk);
}

var updPerkName = function(idPerk, name) {
	//	check(idPerk, Number);
	//	check(name, String);
	Perks.update(idPerk, {
		$set : {
			name : name
		}
	});
}

// PUBLIC
dalPerks = {
		getAll : getPerkAll,
		get : getPerk,
		add : addPerk,
		del : delPerk,
		updName : updPerkName		
}