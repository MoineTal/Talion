/** Schema d'entrainement */
Schema.Training = new SimpleSchema({
	'gladId': {
    	type: String,
    	label: "Gladiateur"
    },
	'attributes': {
    	type: Number,
    	label: "Attributs",
    	min:40,
    	max:60
    },
	'skills': {
    	type: Number,
    	label: "Comp�tences",
    	min:40,
    	max:60
    },
    'createdAt': {
        type: Date,
        label: "Date de cr�ation"
    },
    'owner': {
        type: String,
        label: "Propri�taire"
    }
});

/** Schema d'entrainement d'attributs */
Schema.TrainingAttributes = new SimpleSchema({
	'gladId': {
    	type: String,
    	label: "Gladiateur"
    },
	'attributes': {
    	type: [Schema.Attributes],
    	label: "Attributs"
    },
    'createdAt': {
        type: Date,
        label: "Date de création",
        optional: true
    }, 
    'updatedAt': {
        type: Date,
        label: "Date de modification",
        optional: true
    }, 
    'owner': {
        type: String,
        label: "Propri�taire"
    }
});

/** Schema d'entrainement d'une comp�tence */
Schema.TrainingSkill = new SimpleSchema({
	'skillId': {
    	type: String,
    	label: "Competence"
    },
	'train': {
    	type: Number,
    	label: "entrainement",
    	min:0,
    	max:100
    },	
});

/** Schema d'entrainement des comp�tences */
Schema.TrainingSkills = new SimpleSchema({
	'gladId': {
    	type: String,
    	label: "Gladiateur"
    },
	'skills': {
    	type: [Schema.TrainingSkill],
    	label: "Comp�tences"
    },
    'createdAt': {
        type: Date,
        label: "Date de cr�ation"
    },
    'owner': {
        type: String,
        label: "Propri�taire"
    }
});
