/*
 * Schema contient tous les schemas de BDD.
 * Déclaration :
 * 		Schema.Gladiators = new SimpleSchema(...);
 * Exploitation :
 * 		Gladiators = new Mongo.Collection("gladiators");
 * 		Gladiators.attachSchema(Schema.Gladiators);
 */
/** Schema des attributs du gladiateur */
Schema.Caracteristics = new SimpleSchema({
    'vitesse': {
        type: Number,
        label: "Vitesse",
        min : -999,
        max: 999
    },
    'esquive': {
        type: Number,
        label: "Esquive",
        min : -999,
        max: 999
    },
    'precision': {
        type: Number,
        label: "Precision",
        min : -999,
        max: 999
    },
    'puissance': {
        type: Number,
        label: "Puissance",
        min : -999,
        max: 999
    },
    'volonte': {
        type: Number,
        label: "Volonte",
        min : -999,
        max: 999
    },
    'armure': {
        type: Number,
        label: "Armure",
        min : -999,
        max: 999
    },
    'vie': {
        type: Number,
        label: "Vie",
        min : -999,
        max: 999
    },
    'souffle': {
        type: Number,
        label: "Souffle",
        min : -999,
        max: 999
    },
    'moral': {
        type: Number,
        label: "Moral",
        min : -999,
        max: 999
    }
});
