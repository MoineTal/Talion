/** Competences du gladiateur */
Schema.GladiatorClasses = new SimpleSchema({
    'idClasse': {
        type: String,
        label: "Classe"
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