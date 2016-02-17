//Admin > tactics
Router.route('/admin/Tactics', function () {
	  this.render('Tactics');
	});

Router.route('/admin/Tactics/add', function () {
	  this.render('TacticAddition');
	});
Router.route('/admin/Tactics/:_id', {
	waitOn: function() {
		return Meteor.subscribe('Tactics');
	},
	data: function () {
		var data = Tactics.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    //console.log(item);
	    this.render('TacticEdition');
	}
});
