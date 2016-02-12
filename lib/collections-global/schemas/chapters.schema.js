/** Schema de chapitre */
Schema.Chapters = new SimpleSchema({
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
    'gold': {
        type: Number,
        label: "Or",
        min : 0,
        optional: true
    },
    'maxTeam': {
        type: Number,
        label: "Nombre maximum d'equipes",
        max : 10,
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
    }, 
    'owner': {
        type: String,
        label: "Propriétaire",
        optional: true
    }
});