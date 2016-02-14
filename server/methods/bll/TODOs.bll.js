// PRIVATE
var getTODOAll = function() {
	return dalTODOs.getAll();
}

var getTODO = function(idTODO) {
	check(idTODO, String);
	return dalTODOs.get(idTODO);
}

var addTODO = function(userId, name, foo) {
	//check(userId, Meteor.users);
	check(name, String);
	check(foo, String);
	return dalTODOs.add(userId, name, foo);
}

var delTODO = function(idTODO) {
	check(idTODO, String);
	dalTODOs.del(idTODO);
}

var updTODOName = function(idTODO, name) {
	check(idTODO, String);
	check(name, String);
	dalTODOs.updName(idTODO, name);
}

// PUBLIC
bllTODOs = {
		getAll : getTODOAll,
		get : getTODO,
		add : addTODO,
		del : delTODO,
		updName : updTODOName		
}