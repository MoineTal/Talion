// PRIVATE
var getNewAll = function() {
	return dalNews.getAll();
}

var getNew = function(idNew) {
	return dalNews.get(idNew);
}

var addNew = function(userId, parent, body, category, level, targets) {
	return dalNews.add(userId, parent, body, category, level, targets);
}

var delNew = function(idNew) {
	dalNews.del(idNew);
}

var updNewName = function(idNew, name) {
	dalNews.updName(idNew, name);
}

// PUBLIC
bllNews = {
		getAll : getNewAll,
		get : getNew,
		add : addNew,
		del : delNew,
		updName : updNewName		
}