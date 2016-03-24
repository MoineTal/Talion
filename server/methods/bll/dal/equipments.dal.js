Equipments.before.insert(function (id, doc) {
	var classe = Classes.findOne(doc.idClasse);
	doc.nameClasse = classe && classe.name;
	doc.createdAt = new Date();
});

Equipments.after.insert(function(id, doc) {
	var msg = 'Nouvel équipement disponible ';
	if(doc.idClasse) {
		msg += 'pour la classe ' + doc.nameClasse + ' ';
	}
	News.insert({
		parent : doc._id,
		body : msg + ' : ' + doc.name,
		category : 'Arène',
		level : '2',
		targets : [doc._id],
		owner : doc.owner
	});	
});

// PRIVATE
var getEquipmentAll = function() {
	return Equipments.find();
}

var getEquipment = function(idEquipment) {
	//	check(idEquipment, Number);
	return Equipments.findOne({ _id : idEquipment });
}

var addEquipment = function(userId, name, desc, loc, mod, mat, qual, adj, idClasse, nameClasse, prerequis, caracs, effects) {
	console.log('dal.addEquipment ' + name);
	check(name, String);
	check(desc, String);
	check(loc, Number);
	check(mod, Number);
	check(mat, Number);
	check(qual, Number);
	check(adj, Number);
	check(caracs, Schema.Caracteristics);

	return Equipments.insert({
		name : name,
		desc : desc,
		loc : loc,
		mod : mod,
		mat : mat,
		qual : qual,
		adj : adj,
		idClasse : idClasse,
		nameClasse : nameClasse,
		prerequis : prerequis,
		caracteristics : caracs,
		effects : effects,
		owner : userId
	});
}

var delEquipment = function(idEquipment) {
	//	check(idEquipment, Number);
	Equipments.remove(idEquipment);
}

var updEquipmentName = function(idEquipment, name) {
	//	check(idEquipment, Number);
	//	check(name, String);
	Equipments.update(idEquipment, {
		$set : {
			name : name
		}
	});
}

// PUBLIC
dalEquipments = {
		getAll : getEquipmentAll,
		get : getEquipment,
		add : addEquipment,
		del : delEquipment,
		updName : updEquipmentName		
}