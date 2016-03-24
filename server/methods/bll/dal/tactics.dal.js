Tactics.before.insert(function (id, doc) {
	doc.createdAt = new Date();
});

// PRIVATE
var getTacticAll = function() {
	return Tactics.find();
}

var getTactic = function(idTactic) {
	//	check(idTactic, Number);
	return Tactics.findOne({ _id : idTactic });
}

var addTactic = function(userId, name, foo) {
	//check(userId, Meteor.users);
	return Tactics.insert({
		name : name,
		foo : foo,
		createdAt : new Date(),
		owner : userId
	});
}

var delTactic = function(idTactic) {
	//	check(idTactic, Number);
	Tactics.remove(idTactic);
}

var updTacticName = function(idTactic, name) {
	//	check(idTactic, Number);
	Tactics.update(idTactic, {
		$set : {
			name : name
		}
	});
}

// PUBLIC
dalTactics = {
		getAll : getTacticAll,
		get : getTactic,
		add : addTactic,
		del : delTactic,
		updName : updTacticName		
}