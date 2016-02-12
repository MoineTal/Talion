/** Schema de gladiateur de combat */
Schema.FightGladiators = new SimpleSchema({
	'idFightTeam': {
    	type: Number,
    	label: "Equipe de combat"
    },
	'idGladiator': {
    	type: String,
    	label: "id Gladiateur"
    },
	'nameGladiator': {
    	type: String,
    	label: "Gladiateur",
    	optional: true
    },
    'idTeam': {
        type: String,
        label: "id Equipe",
        optional: true
    },
	'nameTeam': {
    	type: String,
    	label: "Equipe",
    	optional: true
    },
    'idChapter': {
        type: String,
        label: "id Chapitre",
        optional: true
    },
	'nameChapter': {
    	type: String,
    	label: "Chapitre",
    	optional: true
    },
	'ko': {
    	type: Boolean,
    	label: "K.O.",
    	optional: true
    },
	'killed': {
    	type: Boolean,
    	label: "Tué",
    	optional: true
    }/*,
    'owner': {
        type: String,
        label: "Propriétaire",
        optional: true
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
    } */
});

/** Schema de combat */
Schema.Fights = new SimpleSchema({
	'round': {
    	type: Number,
    	label: "Round"
    },
    'owner': {
        type: String,
        label: "Propriétaire",
        optional: true
    },
    'gladiators': {
        type: [Schema.FightGladiators],
        label: "Gladiateurs",
        optional: true
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
    } 
});