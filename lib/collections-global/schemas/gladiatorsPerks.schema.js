/** Competences du gladiateur */
Schema.GladiatorPerks = new SimpleSchema({
    'idPerk': {
        type: String,
        label: "Trait de caractère"
    },
    'idGladiator': {
        type: String,
        label: "Gladiateur"
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