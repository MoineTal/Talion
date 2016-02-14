Template.gladiatorMenu.helpers({
    /** recupere la liste des gladiateurs de l'equipe */
    'gladiators' : function (teamId) {
        console.log('gladiatorMenu.teams=' + teamId);
        
        return Gladiators.find({
            owner : Meteor.userId(),
            teamId : teamId
        }, {
            sort : {
                createdAt : -1
            }
        });
    }
});