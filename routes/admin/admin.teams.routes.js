//Admin > teams
Router.route('/admin/Teams', function () {
	  this.render('Teams');
	});

Router.route('/admin/Teams/add', function () {
	  this.render('TeamAddition');
	});
Router.route('/admin/Teams/:_id', {
	waitOn: function() {
		return Meteor.subscribe('Teams');
	},
	data: function () {
		var data = Teams.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    //console.log(item);
	    this.render('TeamEdition');
	}
});
