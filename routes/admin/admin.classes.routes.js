//Admin > Classes
Router.route('/admin/Classes', function () {
	  this.render('Classes');
	});

Router.route('/admin/Classes/add', function () {
	  this.render('ClasseAddition');
	});
Router.route('/admin/Classes/:_id', {
	waitOn: function() {
		return Meteor.subscribe('Classes');
	},
	data: function () {
		var data = Classes.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    //console.log(item);
	    this.render('ClasseEdition');
	}
});
/*Router.route('/admin/classes/:_id', function () {
    this.render('ClasseEdition', { data : this.params._id });
});*/
