// PRIVATE
var getClasseAll = function() {
	return dalClasses.getAll();
}

var getClasse = function(idClasse) {
	check(idClasse, String);
	return dalClasses.get(idClasse);
}

var addClasse = function(userId, name, desc, idDomain, attributes, maitre) {
	//check(idUser, Meteor.users);
	check(name, String);
	check(desc, String);
	check(idDomain, String);
	//check(attributes, [String]);
	console.log('bll.addClasse ' + name);
	return dalClasses.add(userId, name, desc, idDomain, attributes, maitre);
}

var delClasse = function(idClasse) {
	check(idClasse, String);
	dalClasses.del(idClasse);
}

var updClasseName = function(idClasse, name) {
	check(idClasse, String);
	check(name, String);
	dalClasses.updName(idClasse, name);
}

var updClasseDesc = function(idClasse, desc) {
	check(idClasse, String);
	check(desc, String);
	dalClasses.updDesc(idClasse, desc);
}

// PUBLIC
bllClasses = {
		getAll : getClasseAll,
		get : getClasse,
		add : addClasse,
		del : delClasse,
		updDesc : updClasseDesc,
		updName : updClasseName		
};