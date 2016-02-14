// HOOKS
Chapters.before.insert(function (id, doc) {
	doc.gold = config.chapters.INIT_GOLD;
	doc.maxTeam = config.chapters.INIT_MAX_TEAM;
	doc.createdAt = new Date();
});

Chapters.after.insert(function(id, doc) {
	News.insert({
		parent : doc._id,
		body : 'Fondation du chapître ' + doc.name,
		category : 'Chapitre',
		level : '1',
		targets : [doc._id],
		owner : doc.owner
	});	
});

Chapters.after.update(function(id, doc) {
	Teams.update({ idChapter : doc._id }, {$set : { nameChapter : doc.name }});	
	Gladiators.update({ idChapter : doc._id }, {$set : { nameChapter : doc.name }});	
});

// PRIVATE
var getChapterAll = function() {
	return Chapters.find();
}

var getChapter = function(idChapter) {
//	check(idChapter, Number);
	return Chapters.findOne({ _id : idChapter });
}

var addChapter = function(userId, name, desc) {
	console.log('dal.addChapter ' + name);
//	check(name, String);
//	check(desc, String);
	return Chapters.insert({
		name : name,
		desc : desc,
		owner : userId
	});
}

var delChapter = function(idChapter) {
//	check(idChapter, Number);
	Chapters.remove(idChapter);
}

var updChapterName = function(idChapter, name) {
	//	check(idChapter, Number);
	//	check(name, String);
	Chapters.update(idChapter, {
		$set : {
			name : name
		}
	});
}

var updChapterDesc = function(idChapter, desc) {
	//	check(idChapter, Number);
	//	check(desc, String);
	Chapters.update(idChapter, {
		$set : {
			desc : desc
		}
	});
}

// PUBLIC
dalChapters = {
		getAll : getChapterAll,
		get : getChapter,
		add : addChapter,
		del : delChapter,
		updName : updChapterName,		
		updDesc : updChapterDesc		
}