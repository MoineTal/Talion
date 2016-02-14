Template.accountTeams.helpers({
	/** recupere la liste des comptes de l'utilisateur */
	'accountTeams' : function() {
		console.log('accountTeams');
		Meteor.call("getAccountTeams", false);
		
		return AccountTeams.find({
			pause : {
				$ne : true
			},
			owner : Meteor.userId()
		}, {
			sort : {
				createdAt : -1
			}
		});
	},
	accountTeamsCount: function () {
		console.log('accountTeamsCount');
		return 	Meteor.call("getAccountTeamsCount");
	}
});

Template.accountTeams.events({
	"submit .new-team" : function(event) {
		// This function is called when the new team form is submitted
		console.log(event.target);
		
		var name = event.target.name.value;
		var desc = event.target.desc.value;

		console.log(name + "-" + desc);

		Meteor.call("addAccountTeam", name, desc);
		
		// Clear form
		event.target.name.value = "";
		event.target.desc.value = "";

		// Prevent default form submit
		return false;
	},
});