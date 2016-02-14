Template.menu.helpers({
  'isAdmin': function(){
	console.log('menu.isAdmin');
    return (Meteor.user().profile.lvl > 0);
    },
  'allowAddingTeam': function (teamId) {
    console.log('menu.allowAddingTeam');
    return (Teams.find({ owner : Meteor.userId() }).count() < Meteor.user().profile.maxTeams);
    }

});