//Admin > messages
Router.route('/admin/Messages', function () {
	  this.render('Messages');
	});

Router.route('/admin/Messages/add', function () {
	  this.render('MessageAddition');
	});
Router.route('/admin/Messages/:_id', {
	waitOn: function() {
		return Meteor.subscribe('Messages');
	},
	data: function () {
		var data = Messages.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    //console.log(item);
	    this.render('MessageEdition');
	}
});
