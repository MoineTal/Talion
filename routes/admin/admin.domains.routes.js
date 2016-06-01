// Admin > Domains
Router.route('/admin/Domains', function () {
	  this.render('Domains');
	});

Router.route('/admin/Domains/add', function () {
	  this.render('DomainAddition');
	});
Router.route('/admin/Domains/:_id', {
	waitOn: function() {
		return Meteor.subscribe('Domains');
	},
	data: function () {
		var data = Domains.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    //console.log(item);
	    this.render('DomainEdition');
	}
});