/** Un objet d'operation. op1 et op2 peuvent contenir soit une valeur numérique, soit un objet Operation */
Schema.Operation = new SimpleSchema({
	op1: {
        type: Object, // Schema.Operation
        blackbox : true,
        label: "op1.obj",
        optional : true
    },
	op1val: {
        type: Number,
        label: "op1.val",
        min : -999,
        max: 999,
        optional : true
    },
    op: {
        type: String,
        label: "operation",
        regEx: /^[A-Z]{3}$/,
        allowedValues: [
                        'ADD', /* Addition */
                        'REM', /* Soustraction */
                        'DIV', /* Division */
                        'MUL', /* Multiplication */
                        'EGA', /* Egalité */
                        'SUP', /* Supérieur à */
                        'INF', /* Inférieur à */
                        'MAX', /* maximum */
                        'MIN', /* minimum */
                        'INV' /* invoque */
                      ]
    },
	op2: {
        type: Object, // Schema.Operation
        blackbox : true, 
        label: "op2.obj",
        optional : true
	},
	op2val: {
        type: Number,
        label: "op2.val",
        min : -999,
        max: 999,
        optional : true
	},
    typ: {
        type: String,
        label: "type",
        regEx: /^[A-Z]{3}$/,
        allowedValues: [
                        'ACT', /* à chaque action - PAR DEFAUT */
                        'BEG', /* debut du round */
                        'DUR', /* Duree après utilisation */
                        'RAN' /* Aléatoire */
                      ],
        optional : true
    },
    typval: {
        type: Number,
        label: "valeur du type d'action",
        min : 0,
        max: 999,
        optional : true
    }
	
});
