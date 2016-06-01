// Publie les données en base pour exploitation côté client
Meteor.publish(null, function () {
	return Versions.find();
});

// Publie les données en base pour exploitation côté client
Meteor.publish("Chapters", function () {
	return Chapters.find();
});

Meteor.publish("Domains", function () {
	return Domains.find();
});

/* on ne peut publier qu'un curseur ou tableau de curseur */
Meteor.publish("DomainById", function (id) {
	return bllDomains.get(id);
});

Meteor.publish("Classes", function () {
	return Classes.find();
});

Meteor.publish("dt_Classes", function (tableName, ids, fields) {
	//return Classes.find();
	var transform = function(entry) {
		var domain = bllDomains.getOne(entry.idDomain);
		entry.domain = domain.name;
		return entry;
	};
	
	var self = this;
	var classes = Classes.find();
	var observer = /*bllClasses.getAll()*/classes.observe({
		added : function(document) {
			self.added('Classes', document._id, transform(document))
		},
		changed : function(newDocument, oldDocument) {
			self.changed('Classes', newDocument._id, transform(newDocument))			
		},
		removed : function(oldDocument) {
			self.removed('Classes', oldDocument._id)
		}		
	});
	
	self.onStop(function () {
		observer.stop();
	});
	
	self.ready();
	return classes;
	//classes.forEach(function(entry) {
	//	self.added("enhancedClasses", entry._id, entry);
	//});
	//return classes;
	
//	//var self = this;
//	//var classes = 
//	var classes = Classes.find();
//	classes.forEach(function(entry) {
//		var domain = bllDomains.getOne(entry.idDomain);
//		entry.domain = domain.name;
//		//self.added("Classes", entry._id, entry);
//	});
//	classes.rewind();
//	/*.forEach(function(entry) {
//		console.log(entry);
//		var domain = bllDomains.getOne(entry.idDomain);
//		// ajoute à la publication le nom de domaine
//		entry.domain = domain.name;
//		console.log(entry);
//		self.added("Classes", entry._id, entry);
//	});*/
//
//	//self.ready();
////	check(tableName, String);
////	check(ids, Array);
////	check(fields, Match.Optional(Object));
//	
//	//console.log(classes);
//	console.log(classes);
//	return classes;
});

Meteor.publish("Equipments", function () {
	return Equipments.find();
});

Meteor.publish("Fights", function () {
	return Fights.find();
});

/*Meteor.publish("FightTeams", function () {
	return FightTeams.find();
});

Meteor.publish("FightGladiators", function () {
	return FightGladiators.find();
});
*/
Meteor.publish("Gladiators", function () {
	return Gladiators.find();
});

Meteor.publish("GladiatorClasses", function () {
	return GladiatorSkills.find();
});

Meteor.publish("GladiatorEquipments", function () {
	return bllGladiatorEquipments.getAll();
	//return GladiatorEquipments.find();
});

Meteor.publish("GladiatorEquipmentsByGladId", function (gladId) {
	//	check(gladId, String);
	return bllGladiatorEquipments.getByGladId(gladId);
});

Meteor.publish("GladiatorEquipmentsByTeamId", function (teamId) {
	//	check(teamId, String);
	return bllGladiatorEquipments.getByTeamId(teamId);
});

Meteor.publish("GladiatorPerks", function () {
	return GladiatorPerks.find();
});

Meteor.publish(null/*"GladiatorSkills"*/, function () {
	return GladiatorSkills.find();
});

Meteor.publish("Messages", function () {
	return Messages.find();
});

Meteor.publish("News", function () {
	return News.find();
});

Meteor.publish("Perks", function () {
	return Perks.find();
});

Meteor.publish("Skills", function () {
	return Skills.find();
});

Meteor.publish("Tactics", function () {
	return Tactics.find();
});

Meteor.publish("Teams", function () {
	return Teams.find();
});

Meteor.publish("Users", function () {
	return Meteor.users.find();
});

