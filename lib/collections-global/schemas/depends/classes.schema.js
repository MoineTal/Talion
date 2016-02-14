/** Schema des donnees de combat du gladiateur */
Schema.Classes = new SimpleSchema({
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
    'attributes': {
        type: [String],
        label: "attributs privilégiés"
    },
    'idDomain': {
        type: String,
        label: "id Domaine"
    },
    'nameDomain': {
        type: String,
        label: "Domaine",
        min: 3,
        max: 30,
        optional: true
    }, 
    'idClasseMaitre': {
        type: String,
        label: "id Classe Maître",
        optional : true
    },
    'nameClasseMaitre': {
        type: String,
        label: "Classe Maître",
        optional : true
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