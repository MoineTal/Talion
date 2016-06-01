//Admin > Fights
Router.route('/admin/Fights', function () {
	  this.render('Fights');
	});

Router.route('/admin/Fights/add', function () {
	  this.render('FightAddition');
	});
Router.route('/admin/Fights/:_id', {
	waitOn: function() {
		return Meteor.subscribe('Fights');
	},
	data: function () {
		var data = Fights.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    //console.log(item);
	    this.render('FightEdition');
	}
});
