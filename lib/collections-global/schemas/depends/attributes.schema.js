/*
 * Schema contient tous les schemas de BDD.
 * Déclaration :
 * 		Schema.Gladiators = new SimpleSchema(...);
 * Exploitation :
 * 		Gladiators = new Mongo.Collection("gladiators");
 * 		Gladiators.attachSchema(Schema.Gladiators);
 */
/** Schema des attributs du gladiateur */
Schema.Attributes = new SimpleSchema({
    'rap': {
        type: Number,
        label: "Rapidité",
        min : 0,
        max: 100
    },
    'per': {
        type: Number,
        label: "Perception",
        min : 0,
        max: 100
    },
    'dex': {
        type: Number,
        label: "Dextérité",
        min : 0,
        max: 100

    },
    'for': {
        type: Number,
        label: "Force",
        min : 0,
        max: 100

    },
    'res': {
        type: Number,
        label: "Résistance",
        min : 0,
        max: 100

    },
    'men': {
        type: Number,
        label: "Mental",
        min : 0,
        max: 100
    }
});
