/** Schema d'equipements de gladiateurs */
Schema.GladiatorEquipments = new SimpleSchema({
    'idGladiator': {
        type: String,
        label: "Gladiateur",
        optional : true
    },
    'idEquipment': {
        type: String,
        label: "Equipment"
    },
    'idTeam': {
        type: String,
        label: "Equipe"
    },
    'owner': {
        type: String,
        label: "Propriétaire"
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