// PRIVATE
var getGladiatorEquipmentAll = function() {
	return GladiatorEquipments.find();
}

var getGladiatorEquipment = function(idGladiatorEquipment) {
	//	check(idGladiatorEquipment, Number);
	return GladiatorEquipments.findOne({ _id : idGladiatorEquipment });
}

var getGladiatorEquipmentsByGladId = function(idGladiator) {
	//	check(idGladiator, Number);
	return GladiatorEquipments.find({ idGladiator : idGladiator });
}

var getGladiatorEquipmentsByTeamId = function(idTeam) {
	//	check(idTeam, Number);
	return GladiatorEquipments.find({ idTeam : idTeam });
}

var addGladiatorEquipment = function(userId, idGladiator, idEquipment, idTeam) {
	//	check(idGladiator, Number);
	//	check(idEquipment, Number);
	//	check(idTeam, Number);
	return GladiatorEquipments.insert({
		idGladiator : idGladiator,
		idEquipment : idEquipment,
		idTeam : idTeam,
		createdAt : new Date(),
		owner : userId
	});
}

var delGladiatorEquipment = function(idGladiatorEquipment) {
	//	check(idGladiatorEquipment, Number);
	GladiatorEquipments.remove(idGladiatorEquipment);
}

var updGladiatorEquipmentName = function(idGladiatorEquipment, name) {
	//	check(idGladiatorEquipment, Number);
	//	check(name, String);
	GladiatorEquipments.update(idGladiatorEquipment, {
		$set : {
			name : name
		}
	});
}

// PUBLIC
dalGladiatorEquipments = {
		getAll : getGladiatorEquipmentAll,
		get : getGladiatorEquipment,
		getByGladId : getGladiatorEquipmentsByGladId,
		getByTeamId : getGladiatorEquipmentsByTeamId,
		add : addGladiatorEquipment,
		del : delGladiatorEquipment,
		updName : updGladiatorEquipmentName		
}