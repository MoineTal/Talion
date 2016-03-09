// Admin > GladiatorSkills
Router.route('/admin/Gladiator/Skills', function () {
	  this.render('GladiatorSkills');
	});

Router.route('/admin/Gladiator/Skills/add', function () {
	  this.render('GladiatorSkillAddition');
	});
Router.route('/admin/Gladiator/Skills/:_id', {
	waitOn: function() {
		return Meteor.subscribe('GladiatorSkills');
	},
	data: function () {
		var data = GladiatorSkills.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    //console.log(item);
	    this.render('GladiatorSkillEdition');
	}
});

