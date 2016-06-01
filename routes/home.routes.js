BaseController = RouteController.extend({
  // specify stuff that every controller should have
	fastRender : true
});
/*
MyDocumentsController = BaseController.extend({
	  layoutTemplate: 'baseLayout',
	  yieldTemplates: {
	    'userMenu': {to: 'menu'}
	  },


	  waitOn: function() {
	    return Meteor.subscribe('domains');
	  },


	  data: function () {
	    data = { waitingFor : AllwaysLate.find() };
	    return data;
	  },


	  onBeforeAction: function(){

	  },


	  onAfterAction: function(){


	  },

	  action: function(){
	    this.render();
	  }
	});
*/

Router.route('/', function () {
  this.render('Home');
});

