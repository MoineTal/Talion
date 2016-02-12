// PRIVATE
var getDomainAll = function() {
	return dalDomains.getAll();
}

var getDomain = function(idDomain) {
	check(idDomain, String);
	return dalDomains.get(idDomain);
}

var getOneDomain = function(idDomain) {
	check(idDomain, String);
	return dalDomains.getOne(idDomain);
}

var addDomain = function(userId, name, desc) {
	//check(userId, Meteor.users);
	check(name, String);
	check(desc, String);
	return dalDomains.add(userId, name, desc);
}

var delDomain = function(idDomain) {
	check(idDomain, String);
	dalDomains.del(idDomain);
}

var updDomainName = function(idDomain, name) {
	check(idDomain, String);
	check(name, String);
	dalDomains.updName(idDomain, name);
}

var updDomainDesc = function(idDomain, desc) {
	check(idDomain, String);
	check(desc, String);
	dalDomains.updDesc(idDomain, desc);
}

// PUBLIC
bllDomains = {
		getAll : getDomainAll,
		get : getDomain,
		getOne : getOneDomain,
		add : addDomain,
		del : delDomain,
		updName : updDomainName,		
		updDesc : updDomainDesc	
};