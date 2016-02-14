// PRIVATE
var getStadiumAll = function() {
	return dalStadiums.getAll();
}

var getStadium = function(idStadium) {
	return dalStadiums.get(idStadium);
}

var addStadium = function(userId, name, foo) {
	return dalStadiums.add(userId, name, foo);
}

var delStadium = function(idStadium) {
	dalStadiums.del(idStadium);
}

var updStadiumName = function(idStadium, name) {
	dalStadiums.updName(idStadium, name);
}

// PUBLIC
bllStadiums = {
		getAll : getStadiumAll,
		get : getStadium,
		add : addStadium,
		del : delStadium,
		updName : updStadiumName		
}