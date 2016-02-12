// PRIVATE
var getNewAll = function() {
	return News.find();
}

var getNew = function(idNew) {
	//	check(idNew, Number);
	return News.findOne({ _id : idNew });
}

var addNew = function(userId, parent, body, category, level, targets) {
	//check(userId, Meteor.users);
	check(parent, String);
	check(body, String);
	check(category, String);
	check(level, String);
	//	check(foo, String);
	return News.insert({
		parent : parent,
		body : body,
		category : category,
		level : level,
		targets : targets,
		owner : userId
	});
}

var delNew = function(idNew) {
	//	check(idNew, Number);
	News.remove(idNew);
}

var updNewName = function(idNew, name) {
	//	check(idNew, Number);
	//	check(name, String);
	News.update(idNew, {
		$set : {
			name : name
		}
	});
}

// PUBLIC
dalNews = {
		getAll : getNewAll,
		get : getNew,
		add : addNew,
		del : delNew,
		updName : updNewName		
}