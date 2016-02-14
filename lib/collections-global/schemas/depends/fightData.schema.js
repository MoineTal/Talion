/** Schema des donnees de combat du gladiateur */
Schema.FightsData = new SimpleSchema({
    'wins': {
        type: Number,
        label: "Nombre de victoires",
        min : 0
    },
    'draws': {
        type: Number,
        label: "Nombre de nuls",
            min : 0
    },
    'defeats': {
        type: Number,
        label: "Nombre de defaites",
        min : 0
    },
    'kos': {
        type: Number,
        label: "Nombre de KOs",
            min : 0
    },
    'kills': {
        type: Number,
        label: "Nombre de meurtres",
            min : 0
    } 
});