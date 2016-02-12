// PRIVATE
var getTacticAll = function() {
	return dalTactics.getAll();
}

var getTactic = function(idTactic) {
	return dalTactics.get(idTactic);
}

var addTactic = function(userId, name, desc) {
	return dalTactics.add(userId, name, desc);
}

var delTactic = function(idTactic) {
	dalTactics.del(idTactic);
}

var updTacticName = function(idTactic, name) {
	dalTactics.updName(idTactic, name);
}

// PUBLIC
bllTactics = {
		getAll : getTacticAll,
		get : getTactic,
		add : addTactic,
		del : delTactic,
		updName : updTacticName		
}