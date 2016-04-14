// HOOKS
Versions.before.insert(function (id, doc) {
	doc.createdAt = new Date();
});

Versions.after.insert(function(id, doc) {
	News.insert({
		parent : doc._id,
		body : 'Nouvelle version' + doc.name + ' installée.',
		category : 'Jeu',
		level : '1',
		targets : [doc._id],
		owner : null
	});	
});