//Admin > Chapters
Router.route('/admin/Chapters', function () {
	  this.render('Chapters');
	});

Router.route('/admin/Chapters/add', function () {
	  this.render('ChapterAddition');
	});
Router.route('/admin/Chapters/:_id', {
	waitOn: function() {
		return Meteor.subscribe('Chapters');
	},
	data: function () {
		var data = Chapters.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    //console.log(item);
	    this.render('ChapterEdition');
	}
});
/*Router.route('/admin/classes/:_id', function () {
    this.render('ClasseEdition', { data : this.params._id });
});*/
