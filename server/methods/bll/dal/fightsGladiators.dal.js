FightGladiators.before.insert(function (id, doc) {
	doc.createdAt = new Date();
	var glad = Gladiators.findOne(doc.idGladiator);
	var team = Teams.findOne(glad && glad.idTeam);
	var chapter = Chapters.findOne(team && team.idChapter);
	doc.nameGladiator = glad && glad.name;
	// affectation des données de dénormalisation
	doc.idTeam = team && team._id;
	doc.nameTeam = team && team.name;
	doc.idChapter = chapter && chapter._id;
	doc.nameChapter = chapter && chapter.name;
});

/*// PRIVATE
var getFightGladiatorAll = function() {
	return FightGladiators.find();
}

var getFightGladiator = function(idFightGladiator) {
	//	check(idFightGladiator, Number);
	return FightGladiators.findOne({ _id : idFightGladiator });
}

var addFightGladiator = function(userId, idFightTeam, idGladiator) {
	//check(userId, Meteor.users);
	//	check(name, String);
	//	check(foo, String);
	return FightGladiators.insert({
		idFightTeam : idFightTeam,
		idGladiator : idGladiator,
		createdAt : new Date(),
		owner : userId
	});
}

var delFightGladiator = function(idFightGladiator) {
	//	check(idFightGladiator, Number);
	FightGladiators.remove(idFightGladiator);
}

var updFightGladiatorName = function(idFightGladiator, name) {
	//	check(idFightGladiator, Number);
	//	check(name, String);
	FightGladiators.update(idFightGladiator, {
		$set : {
			name : name
		}
	});
}

// PUBLIC
dalFightGladiators = {
		getAll : getFightGladiatorAll,
		get : getFightGladiator,
		add : addFightGladiator,
		del : delFightGladiator,
		updName : updFightGladiatorName		
}*/