// Admin > Gladiators
Router.route('/admin/Gladiators', function () {
	  this.render('Gladiators');
	});

Router.route('/admin/Gladiators/add', function () {
	  this.render('GladiatorAddition');
	});
Router.route('/admin/Gladiators/:_id', {
	waitOn: function() {
		return Meteor.subscribe('Gladiators');
	},
	data: function () {
		var data = Gladiators.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    //console.log(item);
	    this.render('GladiatorEdition');
	}
});

