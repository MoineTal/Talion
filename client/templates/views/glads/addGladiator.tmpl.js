Template.addTeamGladiator.helpers({
	'getMinAttrVal' : function () {
		return config.gladiators.MIN_ATTR_VAL_NEW_GLADIATOR;
	},
	'getMaxAttrVal' : function () {
		return config.gladiators.MAX_ATTR_VAL_NEW_GLADIATOR;
	},
	'getSumAttrVal' : function () {
		return config.gladiators.SUM_ATTR_VAL_NEW_GLADIATOR;
	},
	/* Recupère les attributs */
    'getAttributes' : function () {
        console.log('addGladiator.getAttributes');
        
        return config.ATTRIBUT_LIST;
    },    
    'getAreas' : function () {
        console.log('addGladiator.getAreas');
        
        return config.SKILL_AREA_LIST;
    },    
	/* Charge les attributs */
/*	'invokePrefCarAfterLoad' : function () {
	    console.log('addGladiator.invokePrefCarAfterLoad');
	    
	    Meteor.defer(function () {
			$('#inputGladiatorPreferedCarac').html(buildOptions(config.ATTRIBUT_LIST));
	        $('#inputGladiatorPreferedCarac').trigger('change');
	     });
	     return "";
	},
*/	/* Charge les classes */
/*	'invokeAreaAfterLoad' : function () {
	    console.log('addGladiator.invokeAreaAfterLoad');
	    
	    Meteor.defer(function () {
			$('#selectGladiatorArea').html(buildOptions(config.SKILL_AREA_LIST));
	        $('#selectGladiatorArea').trigger('change');
	     });
	     return "";
	}    
*/
});

Template.addTeamGladiator.onRendered(function () {
    $('#inputGladiatorPreferedCarac').trigger('change');
    $('#selectGladiatorArea').trigger('change');
});

Template.addTeamGladiator.events({
	"submit .addTeamGladiator" : function(event) {
		console.log('addTeamGladiator');
		// This function is called when the new gladiator form is submitted
		console.log(event.target);
		
        var teamId = Session.get("selectedTeamId");
        console.log("selectedTeamId=" + teamId);
		var name = event.target.name.value;
        var desc = event.target.desc.value;
        
        var rap = event.target.rap.value;
        var per = event.target.per.value;
        var dex = event.target.dex.value;
        var force = event.target.for.value;
        var res = event.target.res.value;
        var men = event.target.men.value;
        
        var pref = event.target.pref.value;

        var area = event.target.area.value;

		console.log(name + "-" + desc);

		// TODO Check data ?
		
		try {
	        var retour = checkAddGladiator(rap, per, dex, force, res, men);
	        if(retour === "") {
				// TODO : un seul appel qui enchaine les maj ?
				Meteor.call("addTeamGladiator", teamId, name, desc, rap, per, dex, force, res, men, pref, area, function (error, result) {
					console.log("1");
					console.log(error);
					console.log(result);
					console.log("2");
					if(error) {
						console.log(error);
						$('.addTeamGladiator fieldset div.addMsg p').html(error.reason);
						$('.addTeamGladiator fieldset div.addMsg').show();									
					} else {
						console.log("3");
		                $('#addGladiator-modal').modal('hide');
		                document.location.href = '/gladiators/' + result;                                                                                                                                                                                                                                                            	
			        }				
				});			
	        } else {
				console.log(retour);
				$('.addTeamGladiator fieldset div.addMsg p').html(retour);
				$('.addTeamGladiator fieldset div.addMsg').show();										        	
	        }
		} catch(error) {
			console.log(error);
		}

		// Prevent default form submit
		return false;
	},
	/* Met à jour le descriptif de l'attribut selectionne */
	"change #inputGladiatorPreferedCarac" : function(event) {
		console.log("change #inputGladiatorPreferedCarac");
		presentDetail($(event.target).val(), $('#gladiatorPrefCarDesc'), config.ATTRIBUT_LIST, false, false);
	},	
	/* Met à jour le descriptif de la classe selectionnee */
	"change #selectGladiatorArea" : function(event) {
		console.log("change #selectGladiatorArea");		
		presentDetail($(event.target).val(), $('#gladiatorAreaDesc'), config.SKILL_AREA_LIST, false, false);
	}	
});