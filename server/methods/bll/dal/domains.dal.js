// PRIVATE
var getDomainAll = function() {
	return Domains.find();
}

var getDomain = function(idDomain) {
	check(idDomain, String);
	return Domains.find({ _id : idDomain });
}

var getOneDomain = function(idDomain) {
	check(idDomain, String);
	return Domains.findOne({ _id : idDomain });
}

var addDomain = function(userId, name, desc) {
	console.log('dal.addDomain ' + name);
	check(name, String);
	check(desc, String);
	return Domains.insert({
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
		getOne : getOneDomain,
		add : addDomain,
		del : delDomain,
		updName : updDomainName,		
		updDesc : updDomainDesc
}