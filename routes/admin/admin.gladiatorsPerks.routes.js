// Admin > Gladiatorperks
Router.route('/admin/Gladiator/Perks', function () {
	  this.render('GladiatorPerks');
	});

Router.route('/admin/Gladiator/Perks/add', function () {
	  this.render('GladiatorPerkAddition');
	});
Router.route('/admin/Gladiator/Perks/:_id', {
	waitOn: function() {
		return Meteor.subscribe('GladiatorPerks');
	},
	data: function () {
		var data = GladiatorPerks.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    //console.log(item);
	    this.render('GladiatorPerkEdition');
	}
});

