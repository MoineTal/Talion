/** Schema d'equipements */
Schema.Equipments = new SimpleSchema({
    'name': {
        type: String,
        label: "Nom",
        min: 3,
        max: 100
    },
   'desc': {
        type: String,
        label: "Description",
        min: 1,
        max: 300
    },
    'loc': {
        type: Number,
        label: "Localisation",
        min: 0,
        max: 50
    },
    'mod': {
        type: Number,
        label: "Modèle",
        min: 0,
        max: 999
    },
    'mat': {
        type: Number,
        label: "Matériau",
        min: 0,
        max: 999
    },
    'qual': {
        type: Number,
        label: "Qualité",
        min: 0,
        max: 999
    },
    'adj': {
        type: Number,
        label: "Adjectif",
        min: 0,
        max: 999
    },
    'idClasse': {
        type: String,
        label: "id Classe",
        optional : true
    },
    'nameClasse': {
        type: String,
        label: "Classe",
        min: 3,
        max: 30,
        optional : true
    },
   'prerequis': {
        type: [Schema.Operation],
        label: "Prerequis",
        optional : true
    },
    'caracteristics': {
        type: Schema.Caracteristics,
        label: "Caracteristiques"
    },
    'effects': {
        type: [Schema.Operation],
        label: "Effets",
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