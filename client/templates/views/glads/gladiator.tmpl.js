Template.gladiator.helpers({
    'skills' : function (gladId) {
        console.log('gladiator.skills=' + gladId);
        
        return GladiatorSkills.find({
            owner : Meteor.userId(),
            gladId : gladId
        }, {
            sort : {
                createdAt : -1
            }
        });
    }
});