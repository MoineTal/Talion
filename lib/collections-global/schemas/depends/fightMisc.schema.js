/** Schema des capactités de combat du gladiateur */
Schema.FightMisc = new SimpleSchema({
    'foc': {
        type: Number,
        label: "Focus : Capacité à cibler",
        min : -100,
        max : 100
    },
    'dan': {
        type: Number,
        label: "Dangerosité : Capacité à impressionner",
        min : -100,
        max : 100
    },
    'sur': {
        type: Number,
        label: "Survie : Capacité à survivre",
        min : -100,
        max : 100
    },
    'let': {
        type: Number,
        label: "Létalité : Capacité à tuer",
        min : -100,
        max : 100
    } 
});