TrainingAttributes.before.insert(function (id, doc) {
	doc.createdAt = new Date();
});

/** Schema d'entrainement d'un attribut */
Schema.TrainingAttribute = new SimpleSchema({
    'xp': {
        type: Number,
        label: "Experience courante",
    },
    'xpTot': {
        type: Number,
        label: "Experience totale",
    },
    'train': {
        type: Number,
        label: "Effort d'entrainement",
        min : 0,
        max: 100
    }
});

/** Schema d'entrainement d'un attribut */
Schema.TrainingAttributes = new SimpleSchema({
    'rap': {
        type: Schema.TrainingAttribute,
        label: "Entrainement de la rapidit�"
    },
    'per': {
        type: Schema.TrainingAttribute,
        label: "Entrainement de la perception"
    },
    'dex': {
        type: Schema.TrainingAttribute,
        label: "Entrainement de la dexterit�",
    },
    'for': {
        type: Schema.TrainingAttribute,
        label: "Entrainement de la force",
    },
    'res': {
        type: Schema.TrainingAttribute,
        label: "Entrainement de la r�sistance"
    },
    'men': {
        type: Schema.TrainingAttribute,
        label: "Entrainement du mental"
    },
    'createdAt': {
        type: Date,
        label: "Date de cr�ation"
    },
    'owner': {
        type: String,
        label: "Propri�taire"
    },
    'gladId': {
        type: String,
        label: "Gladiateur propri�taire"
    }
});

TrainingAttributes.attachSchema(Schema.TrainingAttributes);
