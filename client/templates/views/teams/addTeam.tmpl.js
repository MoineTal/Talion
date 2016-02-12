Template.addAccountTeam.events({
	"submit .addAccountTeam" : function(event) {
		console.log('addAccountTeam');

		// This function is called when the new team form is submitted
		console.log(event.target);
		
		var name = event.target.name.value;
		var desc = event.target.desc.value;

		console.log(name + "-" + desc);

		Meteor.call("addAccountTeam", name, desc, function (error, result) {
			console.log(error);
			if(error) {
				console.log('addAccountTeam error 1');
                $('.addAccountTeam fieldset div.addMsg p').html(error.reason);
				$('.addAccountTeam fieldset div.addMsg').show();									
			} else {
				// Clear form
				event.target.name.value = "";
				event.target.desc.value = "";
                $('#addTeam-modal').modal('hide');
                document.location.href = '/teams/' + result;                                                            				
			}
		});			
		
		// Prevent default form submit
		return false;
	}
});