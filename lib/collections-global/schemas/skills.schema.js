/** Schema de competence */
Schema.Skills = new SimpleSchema({
    'code': {
        type: String,
        label: "Code",
        index: true,
        unique: true,
        min: 3,
        max: 6
    },
    'name': {
        type: String,
        label: "Nom",
        index: true,
        unique: true,
        min: 3,
        max: 30
    },
    'desc': {
        type: String,
        label: "Description",
        min: 1,
        max: 300
    },
    'verb': {
        type: String,
        label: "Verbe",
        min: 1,
        max: 50
    },
    'action': {
        type: String,
        label: "Action",
        min: 1,
        max: 50
    },
    'active': {
        type: Boolean,
        label: "active/passive"
    },
    'idClasse': {
        type: String,
        label: "id Classe",
        optional : true
    },
    'nameClasse': {
        type: String,
        label: "Classe",
        optional : true
    },
    'type' : {
        type: String,
        allowedValues: [
                        'NEU', // Neutre
                        'OFF', // Offensif
                        'DEF' // Défensif
                      ]
    }, 
    'initLvl': {
        type: Number,
        label: "Niveau de compétence initial",
        min : 0,
        max: 100
    },
    'prerequis': {
        type: [Schema.Operation],
        label: "Tableau de prerequis",
        optional : true
    },
    'targetingEffects': {
        type: [Schema.Operation],
        label: "Tableau des effets de ciblage",
        optional : true
    },
    'effects': {
        type: [Schema.Operation],
        label: "Tableau des effets d'utilisation de compétence",
        optional : true
    },
    'tests': {
        type: [Schema.Operation],
        label: "Tableau des tests",
        optional : true
    },
    'succesEffects': {
        type: [Schema.Operation],
        label: "Tableau des effets de reussite des tests",
        optional : true
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