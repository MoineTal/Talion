/** Schema d'equipements */
Schema.Perks = new SimpleSchema({
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
    'prerequis': {
        type: [Schema.Operation],
        label: "Prerequis",
        optional : true
    },
    'attributes': {
        type: Schema.Attributes,
        label: "Attributs"
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