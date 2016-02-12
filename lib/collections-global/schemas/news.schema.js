Schema.News = new SimpleSchema({
	parent: {
        type: String,
        label: "Parent"
    },
    body: {
        type: String,
        label: "Description",
        min: 1,
        max: 300
    },
    category: {
        type: String,
        label: "Categorie",
        allowedValues: [
                        'Arène',
                        'Chapitre',
                        'Equipe',
                        'Gladiateur'
                        ]        
    },
    level: {
        type: String,
        label: "Niveau"
    },
    targets: {
        type: [String],
        label: "Cibles",
        optional: true
    },
    obsolete: {
        type: Boolean,
        label: "Obsolète",
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
    owner: {
        type: String,
        label: "Propriétaire",
        optional: true
    }
});