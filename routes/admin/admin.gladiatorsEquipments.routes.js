// Admin > GladiatorEquipments
Router.route('/admin/Gladiator/Equipments', function () {
	  this.render('GladiatorEquipments');
	});

Router.route('/admin/Gladiator/Equipments/add', function () {
	  this.render('GladiatorEquipmentAddition');
	});
Router.route('/admin/Gladiator/Equipments/:_id', {
	waitOn: function() {
		return Meteor.subscribe('GladiatorEquipments');
	},
	data: function () {
		var data = GladiatorEquipments.findOne(
            {
                //owner : Meteor.userId(), 
                _id : this.params._id
            });
		
		return data;
	},
	action: function(){
	    //console.log(item);
	    this.render('GladiatorEquipmentEdition');
	}
});

