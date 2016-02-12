Template.sellTeamGlad.events({
	"click .sellTeamGlad" : function(event) {
		console.log('sellTeamGlad=' + this._id);
		// TODO vendre le gladiateur apres confirmation
		if(confirm("Vendre " + this.name + " ?")) {
			
		}
		
		// Prevent default form submit
		return false;
	}
});