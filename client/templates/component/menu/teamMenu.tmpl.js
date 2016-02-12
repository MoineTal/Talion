Template.teamMenu.helpers({
    /** recupere la liste des equipes de l'utilisateur */
    'teams' : function () {
        console.log('teamMenu.teams');
        
        return Teams.find({
            owner : Meteor.userId()
        }, {
            sort : {
                createdAt : -1
            }
        });
    },
    'allowAddingGladiator': function (teamId) {
        console.log('teamMenu.allowAddingGladiator=' + teamId);
        var team = Teams.findOne({ owner : Meteor.userId(), _id : teamId });
        if (team) {
            return (Gladiators.find({ owner : Meteor.userId(), teamId : teamId }).count() < team.maxGlad);
        } else {
            return false;
        }
    }
});

Template.teamMenu.events({
    "click .addTeamGladiator" : function (event) {
        console.log('addTeamGladiator');
        console.log(event.currentTarget.rel);
        
        Session.set('selectedTeamId', event.currentTarget.rel);

        $('#addGladiator-modal').modal('show');
        // Prevent default form submit
        return false;
    }
});
 