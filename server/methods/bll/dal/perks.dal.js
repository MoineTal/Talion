Perks.before.insert(function (id, doc) {
	doc.createdAt = new Date();

	if(doc.idClasse && !doc.nameClasse) {
		var classe = Classes.findOne(doc.idClasse);
		doc.nameClasse = classe && classe.name;
	}
});

Perks.after.insert(function(id, doc) {
	var msg = 'Nouveau trait de caractère disponible ';
	if(doc.idClasse) {
		msg += 'pour la classe ' + doc.nameClasse + ' ';
	}
	Perks.insert({
		parent : doc._id,
		body : msg + ' : ' + doc.name,
		category : 'Arène',
		level : '2',
		targets : [doc._id],
		owner : doc.owner
	});	
});

// PRIVATE
var getPerkAll = function() {
	return Perks.find();
}

var getPerk = function(idPerk) {
	//	check(idPerk, Number);
	return Perks.findOne({ _id : idPerk });
}

var addPerk = function(userId, code, name, desc, idClasse, nameClasse, prerequis, attributes, fightMisc, effects) {
	check(code, String);
	check(name, String);
	check(desc, String);
	console.log('dal.addPerk ' + name);
	return Perks.insert({
		code : code,
		name : name,
		desc : desc,
		idClasse : idClasse,
		nameClasse : nameClasse,
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

var delByCode = function(codePerk) {
	check(codePerk, String);
	Perks.remove({ code : codePerk });
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
		delByCode : delByCode,
		updName : updPerkName		
}

Mods.perks = dalPerks;
