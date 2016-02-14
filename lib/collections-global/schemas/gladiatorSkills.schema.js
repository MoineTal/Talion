/** Competences du gladiateur */
Schema.GladiatorSkills = new SimpleSchema({
    'idGladiator': {
        type: String,
        label: "id Gladiateur"
    },
	'nameGladiator': {
    	type: String,
    	label: "Gladiateur",
    	optional: true
    },
    'idSkill': {
        type: String,
        label: "id Compétence"
    },
	'nameSkill': {
    	type: String,
    	label: "Compétence",
    	optional: true
    },
    'lvl': {
        type: Number,
        label: "Niveau de compétence",
        min : 0,
        max: 100
    },
    'xp': {
        type: Number,
        label: "Experience",
        optional : true
    },
    'xpTot': {
        type: Number,
        label: "Experience totale",
        optional : true
    },
    'train': {
        type: Number,
        label: "Effort d'entrainement",
        optional : true,
        min : 0,
        max: 100
    },
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
    }     
});