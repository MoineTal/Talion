Chapters = new Mongo.Collection("chapters");
Chapters.attachSchema(Schema.Chapters);

Classes = new Mongo.Collection("classes");
Classes.attachSchema(Schema.Classes);

Domains = new Mongo.Collection("domains");
Domains.attachSchema(Schema.Domains);

Equipments = new Mongo.Collection("equipments");
Equipments.attachSchema(Schema.Equipments);

Fights = new Mongo.Collection("fights");
Fights.attachSchema(Schema.Fights);

FightTeams = new Mongo.Collection("fightTeams");
FightTeams.attachSchema(Schema.FightTeams);

FightGladiators = new Mongo.Collection("fightGladiators");
FightGladiators.attachSchema(Schema.FightGladiators);

GladiatorEquipments = new Mongo.Collection("gladiatorEquipments");
GladiatorEquipments.attachSchema(Schema.GladiatorEquipments);

GladiatorPerks = new Mongo.Collection("gladiatorPerks");
GladiatorPerks.attachSchema(Schema.GladiatorPerks);

Gladiators = new Mongo.Collection("gladiators");
Gladiators.attachSchema(Schema.Gladiators);

GladiatorSkills = new Mongo.Collection("gladiatorSkills");
GladiatorSkills.attachSchema(Schema.GladiatorSkills);

News = new Mongo.Collection("news");
News.attachSchema(Schema.News);

Messages = new Mongo.Collection("messages");
Messages.attachSchema(Schema.Messages);

Perks = new Mongo.Collection("perks");
Perks.attachSchema(Schema.Perks);

Skills = new Mongo.Collection("skills");
Skills.attachSchema(Schema.Skills);

Stadiums = new Mongo.Collection("stadiums");
Stadiums.attachSchema(Schema.Stadiums);

Tactics = new Mongo.Collection("tactics");
Tactics.attachSchema(Schema.Tactics);

Teams = new Mongo.Collection("teams");
Teams.attachSchema(Schema.Teams);

Versions = new Mongo.Collection("versions");
Versions.attachSchema(Schema.Versions);

TrainingAttributes = new Mongo.Collection("trainingAttributes");

Meteor.users.attachSchema(Schema.User);

