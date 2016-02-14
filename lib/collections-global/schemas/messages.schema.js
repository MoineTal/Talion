/** Schema de destinataire */
Schema.MessageTo = new SimpleSchema({
	'to': {
    	type: String,
    	label: "Destinataire"
    },
	'archived': {
    	type: Boolean,
    	label: "Archivé"
    },
	'deleted': {
    	type: Boolean,
    	label: "Supprimé"
    }
});

/** Schema de message */
Schema.Messages = new SimpleSchema({
	'from': {
    	type: String,
    	label: "Expediteur"
    },
	'title': {
    	type: String,
    	label: "Titre"
    },
	'body': {
    	type: String,
    	label: "Message"
    },
	'to': {
    	type: [Schema.MessageTo],
    	label: "Destinataires"
    },
	'deleted': {
    	type: Boolean,
    	label: "Supprimé"
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
    }, 
    'owner': {
        type: String,
        label: "Propriétaire"
    }
});