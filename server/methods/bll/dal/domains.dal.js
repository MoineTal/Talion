Domains.before.insert(function (id, doc) {
	doc.createdAt = new Date();
});

Domains.after.insert(function(id, doc) {
	News.insert({
		parent : doc._id,
		body : 'Nouveau domaine disponible : ' + doc.name,
		category : 'Arène',
		level : '3',
		targets : [doc._id],
		owner : doc.owner
	});	
});

//denormalisation du nom de domaine
Domains.after.update(function (userId, doc, fieldNames, modifier, options) {
	console.log('Domains.after.update ' + userId);
	console.log(fieldNames);
	
	Classes.update({ idDomain : doc._id}, 
		{ $set : { nameDomain : doc.name }
		}, 
		{ multi: true }
	);
});

// PRIVATE
var getDomainAll = function() {
	return Domains.find();
}

var getDomain = function(idDomain) {
	check(idDomain, String);
	return Domains.find({ _id : idDomain });
}

var getByCode = function(codeDomain) {
	check(codeDomain, String);
	return Domains.findOne({ code : codeDomain });
}

var getOneDomain = function(idDomain) {
	check(idDomain, String);
	return Domains.findOne({ _id : idDomain });
}

var addDomain = function(userId, code, name, desc) {
	check(code, String);
	check(name, String);
	check(desc, String);
	console.log('dal.addDomain ' + name);
	return Domains.insert({
		code : code,
		name : name,
		desc : desc,
		createdAt : new Date(),
		owner : userId//Meteor.userId()
	});
}

var delDomain = function(idDomain) {
	check(idDomain, String);
	Domains.remove(idDomain);
}

var delByCode = function(codeDomain) {
	check(codeDomain, String);
	Domains.remove({ code : codeDomain });
}

var updDomainName = function(idDomain, name) {
	check(idDomain, String);
	check(name, String);
	Domains.update(idDomain, {
		$set : {
			name : name
		}
	});
}

var updDomainDesc = function(idDomain, desc) {
	check(idDomain, String);
	check(desc, String);
	Domains.update(idDomain, {
		$set : {
			desc : desc
		}
	});
}
// PUBLIC
dalDomains = {
		getAll : getDomainAll,
		get : getDomain,
		getByCode : getByCode,
		getOne : getOneDomain,
		add : addDomain,
		del : delDomain,
		delByCode : delByCode,
		updName : updDomainName,		
		updDesc : updDomainDesc
}

Mods.domains = dalDomains;