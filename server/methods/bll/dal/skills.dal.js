Skills.before.insert(function (id, doc) {
	var classe = Classes.findOne(doc.idClasse);
	doc.nameClasse = classe && classe.name;
	doc.createdAt = new Date();
});

Skills.after.insert(function(id, doc) {
	var msg = 'Nouvelle compétence disponible ';
	if(doc.idClasse) {
		msg += 'pour la classe ' + doc.nameClasse + ' ';
	}
	News.insert({
		parent : doc._id,
		body : msg + ' : ' + doc.name,
		category : 'Arène',
		level : '2',
		targets : [doc._id],
		owner : doc.owner
	});	
});

// PRIVATE
var getSkillAll = function() {
	return Skills.find();
}

var getSkill = function(idSkill) {
	check(idSkill, String);
	return Skills.findOne({ _id : idSkill });
}

var getSkillByClasse = function(idClasse) {
	//check(idClasse, String);
	console.log(idClasse);
	return Skills.find({ $or: [ { idClasse : idClasse }, { idClasse : null }]});
}

var addSkill = function(userId, name, desc, verb, action, active, idClasse, type, initLvl, prerequis, targetingEffects, effects, tests, succesEffects) {
	//check(userId, Meteor.users);
	check(name, String);
	check(desc, String);
	check(verb, String);
	check(action, String);
	check(active, Boolean);
	check(type, String);
	check(initLvl, Number);
	return Skills.insert({
		name : name,
		desc : desc,
		verb : verb, 
		action : action, 
		active : active, 
		idClasse : idClasse, 
		type : type, 
		initLvl : initLvl, 
		prerequis : prerequis, 
		targetingEffects : targetingEffects, 
		effects : effects, 
		tests : tests, 
		succesEffects: succesEffects,
		createdAt : new Date(),
		owner : userId
	});
}

var delSkill = function(idSkill) {
	//	check(idSkill, Number);
	Skills.remove(idSkill);
}

var updSkillName = function(idSkill, name) {
	//	check(idSkill, Number);
	//	check(name, String);
	Skills.update(idSkill, {
		$set : {
			name : name
		}
	});
}

// PUBLIC
dalSkills = {
		getAll : getSkillAll,
		get : getSkill,
		add : addSkill,
		del : delSkill,
		updName : updSkillName,
		getByClasse : getSkillByClasse
}