//Admin > TODOs
Router.route('/admin/TODOs', function () {
	  this.render('TODOs');
	});

Router.route('/admin/TODOs/add', function () {
	  this.render('TODOAddition');
	});
Router.route('/admin/TODOs/:_id', {
	waitOn: function() {
		return Meteor.subscribe('TODOs');
	},
	data: function () {
		var data = TODOs.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    //console.log(item);
	    this.render('TODOEdition');
	}
});
/*Router.route('/admin/classes/:_id', function () {
    this.render('ClasseEdition', { data : this.params._id });
});*/
