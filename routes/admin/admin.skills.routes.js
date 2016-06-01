//Admin > skills
Router.route('/admin/Skills', function () {
	  this.render('Skills');
	});

Router.route('/admin/Skills/add', function () {
	  this.render('SkillAddition');
	});
Router.route('/admin/Skills/:_id', {
	waitOn: function() {
		return Meteor.subscribe('Skills');
	},
	data: function () {
		var data = Skills.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    //console.log(item);
	    this.render('SkillEdition');
	}
});
