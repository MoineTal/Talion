//Admin > perks
Router.route('/admin/Perks', function () {
	  this.render('Perks');
	});

Router.route('/admin/Perks/add', function () {
	  this.render('PerkAddition');
	});
Router.route('/admin/Perks/:_id', {
	waitOn: function() {
		return Meteor.subscribe('Perks');
	},
	data: function () {
		var data = Perks.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    //console.log(item);
	    this.render('PerkEdition');
	}
});
