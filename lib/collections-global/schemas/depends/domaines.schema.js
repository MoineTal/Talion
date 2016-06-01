/** Schema des donnees de combat du gladiateur */
Schema.Domains = new SimpleSchema({
    'code': {
        type: String,
        label: "Code",
        index: true,
        unique: true,
        min: 3,
        max: 6
    },
    'name': {
        type: String,
        label: "Domaine",
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