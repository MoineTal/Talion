Stadiums.before.insert(function (id, doc) {
	doc.createdAt = new Date();
});

// PRIVATE
var getStadiumAll = function() {
	return Stadiums.find();
}

var getStadium = function(idStadium) {
	//	check(idStadium, Number);
	return Stadiums.findOne({ _id : idStadium });
}

var addStadium = function(userId, name, desc) {
	//check(userId, Meteor.users);
	//	check(name, String);
	//	check(desc, String);
	return Stadiums.insert({
		name : name,
		desc : desc,
		createdAt : new Date(),
		owner : userId
	});
}

var delStadium = function(idStadium) {
	//	check(idStadium, Number);
	Stadiums.remove(idStadium);
}

var updStadiumName = function(idStadium, name) {
	//	check(idStadium, Number);
	//	check(name, String);
	Stadiums.update(idStadium, {
		$set : {
			name : name
		}
	});
}

// PUBLIC
dalStadiums = {
		getAll : getStadiumAll,
		get : getStadium,
		add : addStadium,
		del : delStadium,
		updName : updStadiumName		
}