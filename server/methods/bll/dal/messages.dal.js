Messages.before.insert(function (id, doc) {
	doc.createdAt = new Date();
});

// PRIVATE
var getMessageAll = function() {
	return Messages.find();
}

var getMessage = function(idMessage) {
	//	check(idMessage, Number);
	return Messages.findOne({ _id : idMessage });
}

var addMessage = function(userId, name, foo) {
	//check(userId, Meteor.users);
	//	check(name, String);
	return Messages.insert({
		name : name,
		foo : foo,
		createdAt : new Date(),
		owner : userId
	});
}

var delMessage = function(idMessage) {
	//	check(idMessage, Number);
	Messages.remove(idMessage);
}

var updMessageName = function(idMessage, name) {
	//	check(idMessage, Number);
	//	check(name, String);
	Messages.update(idMessage, {
		$set : {
			name : name
		}
	});
}

// PUBLIC
dalMessages = {
		getAll : getMessageAll,
		get : getMessage,
		add : addMessage,
		del : delMessage,
		updName : updMessageName		
}