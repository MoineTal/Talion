Skills.before.insert(function (id, doc) {
	var classe = Classes.findOne(doc.idClasse);
	doc.nameClasse = classe && classe.name;
	doc.createdAt = new Date();
});

Skills.after.insert(function(id, doc) {
	var msg = 'Nouvelle compétence disponible ';
	if(doc.idClasse) {
		msg += 'pour la classe ' + doc.nameClasse + ' ';
	}
	News.insert({
		parent : doc._id,
		body : msg + ' : ' + doc.name,
		category : 'Arène',
		level : '2',
		targets : [doc._id],
		owner : doc.owner
	});	
});

// PRIVATE

// calcule les effets des compétences
var calculerEffets = function(effets, val, valName, cib) {
	var effet = null;

	if(val != 0) {
		effet  = 
		{ 	op1: { what : valName, who : cib }, 
			op1val: null,					
			op: (val > 0) ? 'ADD' : 'REM',
			op2: { op1 : { what : 'NIV', who : 'CMP' },
				op: 'MUL',
				op2: null,
				op2val: (val > 0) ? val : -val },
			op2val:null
        };
	}

	if(effet) {
		effets.push(effet);
	}
	//console.log(effets);
	//return effets;
}


var getSkillAll = function() {
	return Skills.find();
}

var getSkill = function(idSkill) {
	check(idSkill, String);
	return Skills.findOne({ _id : idSkill });
}

var getSkillByClasse = function(idClasse) {
	//check(idClasse, String);
	console.log(idClasse);
	return Skills.find({ $or: [ { idClasse : idClasse }, { idClasse : null }]});
}

/* Ajoute une compétence en calculant ses caractéristiques à partir des éléments fournis */
var addSkill = function (userId, type, code, name, desc, cible, idClasse, vit, esq, tou, pui, vol, arm, vie, sou, mor, foc, mnc, sur, letal, affect, passive, noTest) {
	check(type, String);
	check(code, String);
	check(name, String);
	check(desc, String);
	check(cible, String);
	//check(classe, String);
	check(vit, Number);
	check(esq, Number);
	check(tou, Number);
	check(pui, Number);
	check(vol, Number);
	check(arm, Number);
	check(vie, Number);
	check(sou, Number);
	check(mor, Number);
	check(foc, Number);
	check(mnc, Number);
	check(sur, Number);
	check(letal, Number);

	// compétences de classe à 0, sinon 1.
	var initLvl = 0;
	if(idClasse== null) {
		initLvl= 1;
	}
	//initLvl= idClasse && 1;
	var targetingEffects = null, effects = null,  tests = null, successEffects = null;
	//console.log('#####################################################################');
	if(foc != 0 || mnc != 0) {
		targetingEffects = new Array();
		
		// la cible définitive est soi-même si c'est une action qui affecte VIE SOU ou MOR,
		// sinon, c'est la cible
		var cibleDefinitive = affect ? 'ME': cible;
		calculerEffets(targetingEffects, foc, 'FOC', cibleDefinitive);
		calculerEffets(targetingEffects, mnc, 'MNC', cibleDefinitive);
	}

	// passives
	if(passive) {
		// affecte les effets.
		if(vit != 0 || esq != 0 || tou != 0 || pui != 0 || vol != 0 || arm != 0 || vie != 0 || sou != 0 || mor != 0 || sur != 0 || letal != 0) {
			effects = new Array();
			calculerEffets(effects, vit, 'VIT', cible);
			calculerEffets(effects, esq, 'ESQ', cible);
			calculerEffets(effects, tou, 'TOU', cible);
			calculerEffets(effects, pui, 'PUI', cible);
			calculerEffets(effects, vol, 'VOL', cible);
			calculerEffets(effects, arm, 'ARM', cible);
//			if(!affect){
			calculerEffets(effects, vie, 'VIE', cible);
			calculerEffets(effects, sou, 'SOU', cible);
			calculerEffets(effects, mor, 'MOR', cible);				
//			} else {
//			}
			calculerEffets(effects, sur, 'SUR', cible);
			calculerEffets(effects, letal, 'LET', cible);			
		}
	} else {
		// affecte les effets de succès.
		if(vit != 0 || esq != 0 || tou != 0 || pui != 0 || vol != 0 || arm != 0 || vie != 0 || sou != 0 || mor != 0 || sur != 0 || letal != 0) {
			successEffects = new Array();
			var cibleDefinitive = affect ? 'ME': cible;
			calculerEffets(successEffects, vit, 'VIT', cibleDefinitive);
			calculerEffets(successEffects, esq, 'ESQ', cibleDefinitive);
			calculerEffets(successEffects, tou, 'TOU', cibleDefinitive);
			calculerEffets(successEffects, pui, 'PUI', cibleDefinitive);
			calculerEffets(successEffects, vol, 'VOL', cibleDefinitive);
			calculerEffets(successEffects, arm, 'ARM', cibleDefinitive);
//			if(!affect){
			calculerEffets(successEffects, vie, 'VIE', cible);
			calculerEffets(successEffects, sou, 'SOU', cible);
			calculerEffets(successEffects, mor, 'MOR', cible);				
//			} else {
//			}
			calculerEffets(successEffects, sur, 'SUR', cibleDefinitive);
			calculerEffets(successEffects, letal, 'LET', cibleDefinitive);
			
			// TODO TEST
		}		
		
		
	}
	//console.log(targetingEffects);
	//console.log(effects);
	//console.log(tests);
	//console.log(successEffects);
	//console.log('---------------------------------------------------------------------');

	// inscription en BDD
	addSkillToDB(userId, code, name, desc, name+'er', name+'e', !passive, idClasse, type, initLvl, null, targetingEffects, effects, tests, successEffects);
}


var addSkillToDB = function(userId, code, name, desc, verb, action, active, idClasse, type, initLvl, prerequis, targetingEffects, effects, tests, succesEffects) {
	//check(userId, Meteor.users);
	check(name, String);
	check(desc, String);
	check(verb, String);
	check(action, String);
	check(active, Boolean);
	check(type, String);
	check(initLvl, Number);
	console.log('dal.addSkill ' + name);
	return Skills.insert({
		code : code,
		name : name,
		desc : desc,
		verb : verb, 
		action : action, 
		active : active, 
		idClasse : idClasse, 
		type : type, 
		initLvl : initLvl, 
		prerequis : prerequis, 
		targetingEffects : targetingEffects, 
		effects : effects, 
		tests : tests, 
		succesEffects: succesEffects,
		createdAt : new Date(),
		owner : userId
	});
}

var delSkill = function(idSkill) {
	//	check(idSkill, Number);
	Skills.remove(idSkill);
}

var delByCode = function(code) {
	check(code, String);
	Skills.remove({ code : code });
}

var updSkillName = function(idSkill, name) {
	//	check(idSkill, Number);
	//	check(name, String);
	Skills.update(idSkill, {
		$set : {
			name : name
		}
	});
}

// PUBLIC
dalSkills = {
		getAll : getSkillAll,
		get : getSkill,
		add : addSkill,
		del : delSkill,
		delByCode : delByCode,
		updName : updSkillName,
		getByClasse : getSkillByClasse
}

Mods.skills = dalSkills;
