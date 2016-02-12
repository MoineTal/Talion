// PRIVATE
var getGladiatorSkillAll = function() {
	return GladiatorSkills.find();
}

var getGladiatorSkill = function(idGladiatorSkill) {
	check(idGladiatorSkill, String);
	return GladiatorSkills.findOne({ _id : idGladiatorSkill });
}

var addGladiatorSkill = function(userId, idGladiator, idSkill, lvl) {
	check(idGladiator, String);
	check(idSkill, String);
	check(lvl, Number);
	return GladiatorSkills.insert({
		idGladiator : idGladiator,
		idSkill : idSkill,
		lvl : lvl,
		createdAt : new Date(),
		owner : userId
	});
}

var delGladiatorSkill = function(idGladiatorSkill) {
	check(idGladiatorSkill, String);
	GladiatorSkills.remove(idGladiatorSkill);
}

// PUBLIC
dalGladiatorSkills = {
		getAll : getGladiatorSkillAll,
		get : getGladiatorSkill,
		add : addGladiatorSkill,
		del : delGladiatorSkill	
}