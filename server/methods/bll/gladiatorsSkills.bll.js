// PRIVATE
var getGladiatorSkillAll = function() {
	return dalGladiatorSkills.getAll();
}

var getGladiatorSkill = function(idGladiatorSkill) {
	return dalGladiatorSkills.get(idGladiatorSkill);
}

var addGladiatorSkill = function(userId, idGladiator, idSkill, lvl) {
	check(idGladiator, String);
	check(idSkill, String);
	check(lvl, Number);
	return dalGladiatorSkills.add(userId, idGladiator, idSkill, lvl);
}

var delGladiatorSkill = function(idGladiatorSkill) {
	dalGladiatorSkills.del(idGladiatorSkill);
}

var updGladiatorSkillName = function(idGladiatorSkill, name) {
	dalGladiatorSkills.updName(idGladiatorSkill, name);
}

// PUBLIC
bllGladiatorSkills = {
		getAll : getGladiatorSkillAll,
		get : getGladiatorSkill,
		add : addGladiatorSkill,
		del : delGladiatorSkill,
		updName : updGladiatorSkillName		
}