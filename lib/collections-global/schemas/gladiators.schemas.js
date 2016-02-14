Schema.KilledBy = new SimpleSchema({
    'idGladiatorkilledBy': {
        type: String,
        label: "id Tué par gladiateur",
        optional: true
    },
    'nameGladiatorkilledBy': {
        type: String,
        label: "Tué par gladiateur",
        optional: true
    },
    'idTeamkilledBy': {
        type: String,
        label: "id Tué par équipe",
        optional: true
    },
    'nameTeamkilledBy': {
        type: String,
        label: "Tué par équipe",
        optional: true
    },
    'idChapterkilledBy': {
        type: String,
        label: "id Tué par chapitre",
        optional: true
    },
    'nameChapterKilledBy': {
        type: String,
        label: "Tué par chapitre",
        optional: true
    }
});

/** Schema du Gladiateur */
Schema.Gladiators = new SimpleSchema({
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
        label: "id Classe"
    },
    'nameClasse': {
        type: String,
        label: "Classe",
        optional: true
    },    
    'attributes': {
        type: Schema.Attributes,
        label: "Attributs"
    },
    'pref': {
        type: String,
        label: "Attribut préféré"
    },
    'status': {
        type: String,
        label: "Statut",
        optional: true
    },
    'glory': {
        type: Number,
        label: "Gloire",
        optional: true
    },
    'career': {
        type: Number,
        label: "Carrière",
        optional: true
    },
    'vitality': {
        type: Number,
        label: "Vitalité",
        optional: true
    },
    'killedBy': {
        type: [Schema.KilledBy],
        optional: true
    },
    'fightsData': {
        type: Schema.FightsData,
        label: "Données de combats",
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
    },
    'idTeam': {
        type: String,
        label: "id Equipe propriétaire"
    },
    'nameTeam': {
        type: String,
        label: "Equipe propriétaire",
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
    }    
});
