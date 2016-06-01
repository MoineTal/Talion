// Admin > Equipments
Router.route('/admin/Equipments', function () {
	  this.render('Equipments');
	});

Router.route('/admin/Equipments/add', function () {
	  this.render('EquipmentAddition');
	});
Router.route('/admin/Equipments/:_id', {
	waitOn: function() {
		return Meteor.subscribe('Equipments');
	},
	data: function () {
		var data = Equipments.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    //console.log(item);
	    this.render('EquipmentEdition');
	}
});

