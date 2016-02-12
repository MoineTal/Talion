// PRIVATE
var getMessageAll = function() {
	return dalMessages.getAll();
}

var getMessage = function(idMessage) {
	return dalMessages.get(idMessage);
}

var addMessage = function(userId, name, desc) {
	return dalMessages.add(userId, name, desc);
}

var delMessage = function(idMessage) {
	dalMessages.del(idMessage);
}

var updMessageName = function(idMessage, name) {
	dalMessages.updName(idMessage, name);
}

// PUBLIC
bllMessages = {
		getAll : getMessageAll,
		get : getMessage,
		add : addMessage,
		del : delMessage,
		updName : updMessageName		
}