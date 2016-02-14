/** Schema de tactique */
Schema.Tactic = new SimpleSchema({
    'ifWho': {
    	type: String,
    	label: "Si qui ?",
        optional: true
    },
    'ifHow': {
    	type: String,
    	label: "Si comment ?",
        allowedValues: [
                        '>=', /* Suypérieur à */
                        '<' /* Inférieur à */
                      ],
    	optional: true
    },
    'ifWhat': {
    	type: String,
    	label: "Si quoi ?",
    	optional: true
    },
    'ifWhatVal': {
    	type: Number,
    	label: "Si valeur ?",
    	optional: true
    },
    'thenDo': {
    	type: String,
    	label: "Alors faire",
    	optional: true
    },
    'thenWho': {
    	type: String,
    	label: "Alors qui ?",
    	optional: true
    },
    'thenWhat': {
    	type: String,
    	label: "Alors quoi",
    	optional: true
    },
    'thenWhatVal': {
    	type: Number,
    	label: "Alors valeur ?",
    	optional: true
    },
    'order': {
    	type: Number,
    	label: "Ordre"
    },
});

/** Schema de tactiques */
Schema.Tactics = new SimpleSchema({
    'name': {
        type: String,
        label: "Nom"
    },    
    'active': {
        type: Boolean,
        label: "Active"
    },    
    'idGladiator' : {
        type: String,
        label: "Gladiateur",
        index: true,
        unique: true,
    },
    'tactics': {
    	type: [Schema.Tactic],
    	label: "Tactiques"
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
        label: "Propriétaire"
    }    
});