Template.team.helpers({
	  teamGlads: function () {
		  console.log("teamGlads=" + this._id);
		    return {teamId: this._id}; // this could be pulled from a Session var or something that is reactive
		  },
			'news' : function() {
				var team = this; // contexte courant
				console.log('team.news=' + team._id);

				var news = News.find({
					owner : Meteor.userId(),
					targets : team._id 
				}, {
					sort : {
						createdAt : -1
					}
				});
				
				return news;
			}
		  
/*    'getTeam': function () {
        console.log('team.getTeam');
        return Teams.findOne({ owner : Meteor.userId(), teamId : this.params._id});
    }
 */
});