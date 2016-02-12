// PRIVATE
var getGladiatorEquipmentAll = function() {
	return dalGladiatorEquipments.getAll();
}

var getGladiatorEquipment = function(idGladiatorEquipment) {
	return dalGladiatorEquipments.get(idGladiatorEquipment);
}

var getGladiatorEquipmentsByGladId = function(gladId) {
	return dalGladiatorEquipments.getByGladId(gladId);
}

var getGladiatorEquipmentsByTeamId = function(teamId) {
	return dalGladiatorEquipments.getByTeamId(teamId);
}

var addGladiatorEquipment = function(userId, name, desc) {
	return dalGladiatorEquipments.add(userId, name, desc);
}

var delGladiatorEquipment = function(idGladiatorEquipment) {
	dalGladiatorEquipments.del(idGladiatorEquipment);
}

var updGladiatorEquipmentName = function(idGladiatorEquipment, name) {
	dalGladiatorEquipments.updName(idGladiatorEquipment, name);
}

// PUBLIC
bllGladiatorEquipments = {
		getAll : getGladiatorEquipmentAll,
		get : getGladiatorEquipment,
		getByGladId : getGladiatorEquipmentsByGladId,
		getByTeamId : getGladiatorEquipmentsByTeamId,
		add : addGladiatorEquipment,
		del : delGladiatorEquipment,
		updName : updGladiatorEquipmentName		
}