/** Schema d'equipe */
Schema.Teams = new SimpleSchema({
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
    'pause': {
        type: Boolean,
        label: "Pause",
        optional: true
    },
    'gold': {
        type: Number,
        label: "Or",
        min : 0,
        optional: true
    },
    'maxGlad': {
        type: Number,
        label: "Nombre maximum de gladiateurs",
        min : 3,
        max : 10,
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