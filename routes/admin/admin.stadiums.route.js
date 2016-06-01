//Admin > Stadiums
Router.route('/admin/Stadiums', function () {
	  this.render('Stadiums');
	});

Router.route('/admin/Stadiums/add', function () {
	  this.render('StadiumAddition');
	});
Router.route('/admin/Stadiums/:_id', {
	waitOn: function() {
		return Meteor.subscribe('Stadiums');
	},
	data: function () {
		var data = Stadiums.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    //console.log(item);
	    this.render('StadiumEdition');
	}
});
/*Router.route('/admin/classes/:_id', function () {
    this.render('ClasseEdition', { data : this.params._id });
});*/
