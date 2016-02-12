// PRIVATE
var getChapterAll = function() {
	return dalChapters.getAll();
}

var getChapter = function(idChapter) {
	check(idChapter, String);
	return dalChapters.get(idChapter);
}

var addChapter = function(userId, name, desc) {
	//check(userId, Meteor.users);
	check(name, String);
	check(desc, String);
	return dalChapters.add(userId, name, desc);
}

var delChapter = function(idChapter) {
	check(idChapter, String);
	dalChapters.del(idChapter);
}

var updChapterName = function(idChapter, name) {
	check(idChapter, String);
	check(name, String);
	dalChapters.updName(idChapter, name);
}

var updChapterDesc = function(idChapter, desc) {
	check(idChapter, String);
	dalChapters.updDesc(idChapter, desc);
}

// PUBLIC
bllChapters = {
		getAll : getChapterAll,
		get : getChapter,
		add : addChapter,
		del : delChapter,
		updName : updChapterName,		
		updDesc : updChapterDesc		
};