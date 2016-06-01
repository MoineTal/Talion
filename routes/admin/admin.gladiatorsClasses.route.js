//Admin > Gladiator > Classes
Router.route('/admin/Gladiator/Classes', function () {
	  this.render('GladiatorClasses');
	});

Router.route('/admin/Gladiator/Classes/add', function () {
	  this.render('GladiatorClasseAddition');
	});
Router.route('/admin/Gladiator/Classes/:_id', {
	waitOn: function() {
		return Meteor.subscribe('GladiatorClasses');
	},
	data: function () {
		var data = GladiatorClasses.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    //console.log(item);
	    this.render('GladiatorClasseEdition');
	}
});
/*Router.route('/admin/classes/:_id', function () {
    this.render('ClasseEdition', { data : this.params._id });
});*/
