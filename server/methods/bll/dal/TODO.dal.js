// PRIVATE
var getTODOAll = function() {
	return TODOs.find();
}

var getTODO = function(idTODO) {
	check(idTODO, String);
	return TODOs.findOne({ _id : idTODO });
}

var addTODO = function(userId, name, foo) {
	check(userId, Meteor.users);
	check(name, String);
	check(foo, String);
	return TODOs.insert({
		name : name,
		foo : foo,
		createdAt : new Date(),
		owner : userId
	});
}

var delTODO = function(idTODO) {
	check(idTODO, String);
	TODOs.remove(idTODO);
}

var updTODOName = function(idTODO, name) {
	check(idTODO, String);
	check(name, String);
	TODOs.update(idTODO, {
		$set : {
			name : name
		}
	});
}

// PUBLIC
dalTODOs = {
		getAll : getTODOAll,
		get : getTODO,
		add : addTODO,
		del : delTODO,
		updName : updTODOName		
}