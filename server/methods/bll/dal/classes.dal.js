// denormalisation du nom de domaine
Classes.before.insert(function (id, doc) {
	console.log('Classes.before.insert ' + id);
	var domain = Domains.findOne(doc.idDomain);
	doc.nameDomain = domain && domain.name;
	doc.createdAt = new Date();

	if(doc.idClasseMaitre) {
		var classe = Classes.findOne(doc.idClasseMaitre);
		doc.nameClasseMaitre = classe && classe.name;
	}
});

Classes.after.insert(function(id, doc) {
	News.insert({
		parent : doc._id,
		body : 'Nouvelle classe disponible : ' + doc.name,
		category : 'Arène',
		level : '2',
		targets : [doc._id],
		owner : doc.owner
	});	
});

/*
Classes.after.insert(function (id, doc) {
});
*/


// PRIVATE
var getClasseAll = function() {
	return Classes.find();
/*	return Classes.find({},
			{ transform : function(entry) {
				entry.domain = dalDomains.getOne(entry.idDomain);
			}});
*/
}

var getClasse = function(idClasse) {
	check(idClasse, String);
	return Classes.findOne({ _id : idClasse });
}

var addClasse = function(userId, name, desc, idDomain, attributes, maitre) {
	check(name, String);
	check(desc, String);
	check(idDomain, String);
	return Classes.insert({
		name : name,
		desc : desc,
		idDomain : idDomain,
		idClasseMaitre : maitre,
		attributes : attributes,
		owner : userId //Meteor.userId()
	});
}

var delClasse = function(idClasse) {
	check(idClasse, String);
	Classes.remove(idClasse);
}

var updClasseName = function(idClasse, name) {
	check(idClasse, String);
	check(name, String);
	Classes.update(idClasse, {
		$set : {
			name : name
		}
	});
}

var updClasseDesc = function(idClasse, desc) {
	check(idClasse, String);
	check(desc, String);
	Classes.update(idClasse, {
		$set : {
			desc : desc
		}
	});
}

// PUBLIC
dalClasses = {
		getAll : getClasseAll,
		get : getClasse,
		add : addClasse,
		del : delClasse,
		updName : updClasseName,		
		updDesc : updClasseDesc
}