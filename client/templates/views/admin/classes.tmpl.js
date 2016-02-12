Template.ClasseEdition.helpers({
	'classes' : function() {
		return Classes.find();
	}
//	'getClasse' : function () {
//		Meteor.subscribe('classes');
//		return Classes.findOne(
//	            {
//	                //owner : Meteor.userId(), 
//	                _id : this
//	            });
//	}
});

Template.ClasseEdition.onRendered(function () {
// TODO
});

Template.ClasseEdition.events({
});