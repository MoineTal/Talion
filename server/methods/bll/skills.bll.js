// PRIVATE
var getSkillAll = function() {
	return dalSkills.getAll();
}

var getSkill = function(idSkill) {
	return dalSkills.get(idSkill);
}

var getSkillByClasse = function(idClasse) {
	//check(idClasse, String);
	return dalSkills.getByClasse(idClasse);
}

var addSkill = function(userId, name, desc, verb, action, active, idClasse, type, initlvl, prerequis, targetingEffects, effects, tests, succesEffects) {
	return dalSkills.add(userId, name, desc, verb, action, active, idClasse, type, initlvl, prerequis, targetingEffects, effects, tests, succesEffects);
}

/*
 * who : ME=moi, CIB=cible, ADV=adversaires, ASS=assaillants, ALY=alliés, EQU=equipe, ALL=tous, CMP=competence, FAM=familier
 * what : caracteristiques + NIV=niveau + KIL=risque de mort +FOC=focus +DAN=Dangerosite
 */

var generateSkillRepos = function(userId) {
	// REPOS
	var effects = [{
		op1 : {what : 'SOU', who : 'ME'},
		op1Val : 0, 
		op: 'ADD', 
		op2 : { op1 : null, 
			op1val : 10,
			op: 'ADD',
			op2 : { op1 : {what : 'NIV', who : 'CMP'}, 
				op1val : 0,
				op: 'MUL',
				op2 : null,
				op2val : 10 },
			op2val : 0 },
		op2val : 0
	}];
	dalSkills.add(userId, 'Repos', 'Reprendre son souffle, pour mieux repartir à l\'assaut', 'Se reposer', 'se repose', true, null, 'NEUTRE', 1, null, null, effects, null, null);	
}

var generateSkillAttaque = function(userId) {
	var effects = [{
		op1 : {what : 'SOU', who : 'ME'},
		op1Val : 0, 
		op: 'REM', 
		op2 : { op1 : {what : 'NIV', who : 'CMP'}, 
			op1val : 0,
			op: 'MUL',
			op2 : null,
			op2val : 2 },
		op2val : 0
	}];
	// ATTAQUE
	var tests = [{
		op1 : { op1 : {what : 'PRE', who : 'ME'}, 
			op1val : 0,
			op: 'ADD',
			op2 : { op1 : {what : 'NIV', who : 'CMP'}, 
				op1val : 0,
				op: 'MUL',
				op2 : null,
				op2val : 2 },
			op2val : 0 },
		op1Val : 0, 
		op: 'SUP', 
		op2 : {what : 'ESQ', who : 'CIB'},
		op2val : 0
	}];
	var successEffects = [{
		op1 : {what : 'VIE', who : 'CIB'},
		op1Val : 0, 
		op: 'REM', 
		op2 : { op1 : {what : 'PUI', who : 'ME'}, 
			op1val : 0,
			op: 'REM',
			op2 : {what : 'ARM', who : 'CIB'},
			op2val : 0 },
		op2val : 0
	}];
	// userId, name, desc, verb, action, active, idClasse, type, initlvl, prerequis, targetingEffects, effects, tests, succesEffects
	dalSkills.add(userId, 'Attaquer', 'Porter des coups jusqu\'à la victoire', 'Attaquer', 'attaque', true, null, 'OFFENSIF', 1, null, null, effects, tests, successEffects);
}

var generateSkillMoine = function(userId, idClasse) {
	console.log('Compétences de Moine');
	// Soin
	var effects = [{
		op1 : {what : 'VIE', who : 'CIB'},
		op1Val : 0, 
		op: 'ADD', 
		op2 : { op1 : {what : 'VOL', who : 'ME'}, 
			op1val : 0,
			op: 'ADD',
			op2 : {op1 : {what : 'NIV', who : 'CMP'}, 
				op1val : 0,
				op: 'MUL',
				op2 : null,
				op2val : 10 },
			op2val : 0 },
		op2val : 0
	}, {
		op1 : {what : 'VIE', who : 'ME'},
		op1Val : 0, 
		op: 'REM', 
		op2 : {what : 'NIV', who : 'CMP'},
		op2val : 0
	}, {
		op1 : {what : 'SOU', who : 'ME'},
		op1Val : 0, 
		op: 'REM', 
		op2 : {what : 'NIV', who : 'CMP'},
		op2val : 0
	}];
	// userId, name, desc, verb, action, active, idClasse, type, initlvl, prerequis, targetingEffects, effects, tests, succesEffects
	dalSkills.add(userId, 'Soins sacrés', 'Restaurer sa vie et celle de ses compagnons est un don immense.', 'Soigner', 'soigne', true, idClasse, 'DEFENSIF', 0, null, null, effects, null, null);

	// Aura régénératrice
	effects = [{
		op1 : {what : 'VIE', who : 'ALY'},
		op1Val : 0, 
		op: 'ADD', 
		op2 : {what : 'NIV', who : 'CMP'},
		op2val : 0
	}, {
		op1 : {what : 'SOU', who : 'ME'},
		op1Val : 0, 
		op: 'REM', 
		op2 : {what : 'NIV', who : 'CMP'},
		op2val : 0
	}];
	// userId, name, desc, verb, action, active, idClasse, type, initlvl, prerequis, targetingEffects, effects, tests, succesEffects
	dalSkills.add(userId, 'Aura régénératrice', 'Une aura bienfaisante qui aide ses compagnons à retrouver leurs forces', 'Soigner', 'soigne', false, idClasse, 'DEFENSIF', 0, null, null, effects, null, null);

	// Exorcicsme
	effects = [{
		op1 : {what : 'VOL', who : 'ME'},
		op1Val : 0, 
		op: 'ADD', 
		op2 : {what : 'NIV', who : 'CMP'},
		op2val : 0
	}, {
		op1 : {what : 'SOU', who : 'ME'},
		op1Val : 0, 
		op: 'REM', 
		op2 : { op1 : {what : 'NIV', who : 'CMP'}, 
			op1val : 0,
			op: 'MUL',
			op2 : null,
			op2val : 3 },
		op2val : 0
	}];
	
	var tests = [{
		op1 : { op1 : {what : 'VOL', who : 'ME'}, 
			op1val : 0,
			op: 'ADD',
			op2 : {what : 'NIV', who : 'CMP'},
			op2val : 0 },
		op1Val : 0, 
		op: 'SUP', 
		op2 : {what : 'VOL', who : 'CIB'},
		op2val : 0
	}];
	var successEffects = [{
		op1 : {what : 'MOR', who : 'CIB'},
		op1Val : 0, 
		op: 'REM', 
		op2 : { op1 : {what : 'NIV', who : 'CMP'}, 
			op1val : 0,
			op: 'MUL',
			op2 : null,
			op2val : 10 },
		op2val : 0
	}];
	// userId, name, desc, verb, action, active, idClasse, type, initlvl, prerequis, targetingEffects, effects, tests, succesEffects
	dalSkills.add(userId, 'Exorcisme', 'Une attaque psychique particulièrement traumatisante', 'Exorcicer', 'exorcice', true, idClasse, 'OFFENSIF', 0, null, null, effects, tests, successEffects);
}

var generateSkillChevalier = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
	// Protection
	var effects = [{
		op1 : {what : 'ARM', who : 'ME'},
		op1Val : 0, 
		op: 'ADD', 
		op2 : { op1 : {what : 'NIV', who : 'CMP'}, 
			op1val : 0,
			op: 'MUL',
			op2 : null,
			op2val : 3 },
		op2val : 0,
		typ : 'BEG'
	}, {
		op1 : {what : 'SOU', who : 'ME'},
		op1Val : 0, 
		op: 'REM', 
		op2 : { op1 : {what : 'NIV', who : 'CMP'}, 
			op1val : 0,
			op: 'MUL',
			op2 : null,
			op2val : 4 },
		op2val : 0
	}, {
		op1 : {what : 'DAN', who : 'ME'},
		op1Val : 0, 
		op: 'ADD', 
		op2 : {what : 'NIV', who : 'CMP'},
		op2val : 0
	}];
	// userId, name, desc, verb, action, active, idClasse, type, initlvl, prerequis, targetingEffects, effects, tests, succesEffects
	dalSkills.add(userId, 'Protection', 'Ajuster au mieux son armure pour augmenter son efficacité et l\'impression d\'invulnerabilité', 'Se Protéger', 'se protège', false, idClasse, 'DEFENSIF', 0, null, null, effects, null, null);

	// Charge
	effects = [{
		op1 : {what : 'VOL', who : 'ME'},
		op1Val : 0, 
		op: 'ADD', 
		op2 : {what : 'NIV', who : 'CMP'},
		op2val : 0
	}, {
		op1 : {what : 'FOC', who : 'ME'},
		op1Val : 0, 
		op: 'REM', 
		op2 : null/*{what : 'NIV', who : 'CMP'}*/,
		op2val : 10
	}];
	var targettingEffects = [{
		op1 : {what : 'DAN', who : 'ME'},
		op1Val : 0, 
		op: 'ADD', 
		op2 : {what : 'NIV', who : 'CMP'},
		op2val : 0
	}];
	var tests = [{
		op1 : { op1 : {what : 'PRE', who : 'ME'}, 
			op1val : 0,
			op: 'REM',
			op2 : {what : 'NIV', who : 'CMP'},
			op2val : 0 },
		op1Val : 0, 
		op: 'SUP', 
		op2 : {what : 'ESQ', who : 'CIB'},
		op2val : 0
	}];
	var successEffects = [{
		op1 : {what : 'VIE', who : 'CIB'},
		op1Val : 0, 
		op: 'REM', 
		op2 : { op1 : { op1 : {what : 'PUI', who : 'ME'}, 
				op1val : 0,
				op: 'ADD',
				op2 : null,
				op2val : { op1 : {what : 'NIV', who : 'CMP'}, 
					op1val : 0,
					op: 'ADD',
					op2 : null,
					op2val : 2 } 
				}, 
			op1val : 0,
			op: 'REM',
			op2 : {what : 'ARM', who : 'CIB'},
			op2val : 0 },
		op2val : 0
	}];
	// userId, name, desc, verb, action, active, idClasse, type, initlvl, prerequis, targetingEffects, effects, tests, succesEffects
	dalSkills.add(userId, 'Charger', 'Charger son adversaire avec toute sa puissance', 'Charger', 'charge', true, idClasse, 'OFFENSIF', 1, null, targettingEffects, effects, tests, successEffects);
}

var generateSkillPaladin = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillEnchanteur = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillAnge = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillErmite = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillRanger = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillDruide = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillProtecteur = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillTitan = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillArtificier = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillPillard = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillBerserker = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillPyromancien = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillDemon = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillElementaire = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillDuelliste = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillGenie = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillMage = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillArchimage = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillBrute = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillChevalierNoir = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillLiche = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillNecromant = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkillHorreur = function(userId, idClasse, nameClasse, idDomain, nameDomain) {
}

var generateSkills = function(userId) {
	generateSkillRepos(userId);
	generateSkillAttaque(userId);


	var classes = dalClasses.getAll();
	classes.forEach(function(element) {
		if(element != null) {
			if(element.name == 'Moine') { generateSkillMoine(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Chevalier') { generateSkillChevalier(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Paladin') { generateSkillPaladin(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Enchanteur') { generateSkillEnchanteur(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'ANGE') { generateSkillAnge(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Ermite') { generateSkillErmite(userId, element._id, element.name, element.idDomain, element.nameDomain); }	
			if(element.name == 'Ranger') { generateSkillRanger(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Druide') { generateSkillDruide(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Protecteur') { generateSkillProtecteur(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'TITAN') { generateSkillTitan(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Artificier') { generateSkillArtificier(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Pillard') { generateSkillPillard(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Berserker') { generateSkillBerserker(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Pyromancien') { generateSkillPyromancien(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'DEMON') { generateSkillDemon(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Elementaire') { generateSkillElementaire(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Duelliste') { generateSkillDuelliste(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Génie') { generateSkillGenie(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Mage') { generateSkillMage(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'ARCHIMAGE') { generateSkillArchimage(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Brute') { generateSkillBrute(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Chevalier noir') { generateSkillChevalierNoir(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Liche') { generateSkillLiche(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'Nécromant') { generateSkillNecromant(userId, element._id, element.name, element.idDomain, element.nameDomain); }
			if(element.name == 'HORREUR') { generateSkillHorreur(userId, element._id, element.name, element.idDomain, element.nameDomain); }
		}
	});
}

var delSkill = function(idSkill) {
	dalSkills.del(idSkill);
}

var updSkillName = function(idSkill, name) {
	dalSkills.updName(idSkill, name);
}

// PUBLIC
bllSkills = {
		getAll : getSkillAll,
		get : getSkill,
		add : addSkill,
		del : delSkill,
		updName : updSkillName,		
		generate : generateSkills,
		getByClasse : getSkillByClasse
}