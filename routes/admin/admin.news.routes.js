//Admin > news
Router.route('/admin/News', function () {
	  this.render('News');
	});

Router.route('/admin/News/add', function () {
	  this.render('NewAddition');
	});
Router.route('/admin/News/:_id', {
	waitOn: function() {
		return Meteor.subscribe('News');
	},
	data: function () {
		console.log(this.params._id);
		var data = News.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    console.log(this);
	    this.render('NewEdition');
	}
});
