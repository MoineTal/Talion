var creerPerksAnge = function(id) {
	console.log('!! Ange !!');

	var effects = [];
	var prerequis = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
	// TODO calculer prerequis correctement !
	bllUtil.addEffects(effects, {what : 'FOC', who : 'ME'}, config.perk.BASE_FOC_VAL*2/*prerequis*/);
	bllUtil.majAttributes(prerequis, 'PER', config.perk.BASE_FOC_VAL*2);
	console.log('effects=');
	console.log(effects);
	console.log('prerequis=');
	console.log(prerequis);
	var attributes = { 'rap': 0, 'per': 0, 'dex': 1, 'for': 1, 'res': 0, 'men': 0 };
	bllPerks.add(null, "Précis", "Une précision...divine !", id, attributes, effects, prerequis);
	
	effects = [];
	prerequis = [];
	bllUtil.addEffects(effects, {what : 'FOC', who : 'ME'}, config.perk.BASE_FOC_VAL*2/*prerequis*/);
	bllUtil.addEffects(effects, {what : 'DAN', who : 'ME'}, -config.perk.BASE_DAN_VAL*2/*prerequis*/);
	bllUtil.addEffects(effects, {what : 'KLL', who : 'ME'}, -config.perk.BASE_KILL_VAL*2/*prerequis*/);
	bllUtil.majAttributes(prerequis, 'PER', config.perk.BASE_FOC_VAL*2);
	bllUtil.majAttributes(prerequis, 'RES', config.perk.BASE_DAN_VAL*2);
	bllUtil.majAttributes(prerequis, 'FOR', config.perk.BASE_KILL_VAL*2);
	console.log('effects=');
	console.log(effects);
	console.log('prerequis=');
	console.log(prerequis);
	var attributes = { 'rap': 0, 'per': 2, 'dex': 0, 'for': 2, 'res': 1, 'men': 0 };
	bllPerks.add(null, "Bienveillant", "Il aime son prochain", id, attributes, effects, prerequis);
}


var creerDonneesBase = function() {
	
	var classes = [];

	if(bllPerks.getAll().count() === 0 && bllPerks.getAll().count() === 0) {
		var effects = null;
		var attributes = { 'rap': 1, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Agile", "Un peu plus rapide que la moyenne...", null, attributes, effects);
		effects = null;
		attributes = { 'rap': 0, 'per': 1, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Attentif", "Un peu plus attentif que la moyenne...", null, attributes, effects);
		effects = null;
		attributes = { 'rap': 0, 'per': 0, 'dex': 1, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Souple", "Un peu plus souple que la moyenne...", null, attributes, effects);
		effects = null;
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 1, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Trapu", "Un peu plus fort que la moyenne...", null, attributes, effects);
		effects = null;
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 1, 'men': 0 };
		bllPerks.add(null, "Résistant", "Un peu plus résistant que la moyenne...", null, attributes, effects);
		effects = null;
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 1 };
		bllPerks.add(null, "Volontaire", "Un peu plus volontaire que la moyenne...", null, attributes, effects);
		effects = [{
			op1 : {what : 'FOC', who : 'ME'},
			op1val : 0,
			op : 'ADD',
			op2 : null,
			op2val : config.perk.BASE_FOC_VAL			
		}];
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Concentré", "Un peu plus concentré que la moyenne...", null, attributes, effects);		
		effects = [{
				op1 : {what : 'DAN', who : 'ME'},
				op1val : 0,
				op : 'ADD',
				op2 : null,
				op2val : config.perk.BASE_DAN_VAL			
		}];
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Inquiétant", "Un quelque chose de dérangeant...", null, attributes, effects);
		effects = [{
				op1 : {what : 'KLL', who : 'ME'},
				op1val : 0,
				op : 'ADD',
				op2 : null,
				op2val : config.perk.BASE_KILL_VAL			
		}];
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Brutal", "Il fait mal, et ça lui plait.", null, attributes, effects);
		
		effects = null;
		attributes = { 'rap': 2, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Nerveux", "Agité de tics, et très rapide.", null, attributes, effects);
		effects = null;
		attributes = { 'rap': 0, 'per': 2, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Observateur", "Il identifie les faiblesses de ses adversaires.", null, attributes, effects);
		effects = null;
		attributes = { 'rap': 0, 'per': 0, 'dex': 2, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Habile", "Sait manier tout type d'arme.", null, attributes, effects);
		effects = null;
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 2, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Fort", "Des muscles saillants", null, attributes, effects);
		effects = null;
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 2, 'men': 0 };
		bllPerks.add(null, "Inébranlable", "Le faire chuter tient de la performance !", null, attributes, effects);
		effects = null;
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 2 };
		bllPerks.add(null, "Déterminé", "Il ne s'en laisse pas compter.", null, attributes, effects);
		effects = [{
				op1 : {what : 'FOC', who : 'ME'},
				op1val : 0,
				op : 'ADD',
				op2 : null,
				op2val : config.perk.BASE_FOC_VAL*2			
		}];
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Focalisé", "Se choisit un objectif, et s'y tient !", null, attributes, effects);		
		effects = [{
				op1 : {what : 'DAN', who : 'ME'},
				op1val : 0,
				op : 'ADD',
				op2 : null,
				op2val : config.perk.BASE_DAN_VAL*2			
		}];
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Menaçant", "Ses adversaires sont obligés de l'avoir à l'oeil !", null, attributes, effects);
		effects = [{
				op1 : {what : 'KLL', who : 'ME'},
				op1val : 0,
				op : 'ADD',
				op2 : null,
				op2val : config.perk.BASE_KILL_VAL*2			
		}];
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Cruel", "Aime faire souffrir", null, attributes, effects);
		
		effects = null;
		attributes = { 'rap': 3, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Véloce", "Difficile de le suivre.", null, attributes, effects);
		effects = null;
		attributes = { 'rap': 0, 'per': 3, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Vigilant", "Rien ne lui échappe !", null, attributes, effects);
		effects = null;
		attributes = { 'rap': 0, 'per': 0, 'dex': 3, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Infaillible", "Ne rate jamais sa cible.", null, attributes, effects);
		effects = null;
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 3, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Puissant", "Une force qui impose le respect.", null, attributes, effects);
		effects = null;
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 3, 'men': 0 };
		bllPerks.add(null, "Invincible", "Les coups semblent ne rien lui faire...", null, attributes, effects);
		effects = null;
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 3 };
		bllPerks.add(null, "Obstiné", "Une vraie force de caractère !", null, attributes, effects);
		effects = [{
				op1 : {what : 'FOC', who : 'ME'},
				op1val : 0,
				op : 'ADD',
				op2 : null,
				op2val : config.perk.BASE_FOC_VAL*3		
		}];
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Maniaque", "Semble ne rien savoir faire d'autre que son objectif du moment.", null, attributes, effects);		
		effects = [{
				op1 : {what : 'DAN', who : 'ME'},
				op1val : 0,
				op : 'ADD',
				op2 : null,
				op2val : config.perk.BASE_DAN_VAL*3			
		}];
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Terrifiant", "Sa simple présence encourage les défections.", null, attributes, effects);
		effects = [{
				op1 : {what : 'KLL', who : 'ME'},
				op1val : 0,
				op : 'ADD',
				op2 : null,
				op2val : config.perk.BASE_KILL_VAL*3			
		}];
		attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
		bllPerks.add(null, "Sanguinaire", "Adepte de la décoration extérieure", null, attributes, effects);

		//var attributes = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
		//bllPerk.add("agile", "", null, attributes, effects);
	}
	
	if(bllDomains.getAll().count() === 0 && bllClasses.getAll().count() === 0) {
		// rap per dex for res men
		var idLumiere = bllDomains.add(null, "Lumière", 'Domaine de l\'ordre, de la justice et de la pureté.');
		var idTenebre = bllDomains.add(null, "Ténèbres", 'Domaine du mal, de la peur et de la mort.');
		var idChaos = bllDomains.add(null, "Chaos", 'Domaine de la guerre, de la destruction et de la colère.');
		var idNature = bllDomains.add(null, "Nature", 'Domaine de la vie, de la nature et de la croissance.');
		var idEsprit = bllDomains.add(null, "Esprit", 'Domaine de la connaissance, de l\'illusion et de la précision.');		  

		var idAnge = bllClasses.add(null, 'Ange', 'Guerrier céleste.', idLumiere, ['FOR'], null);
		classes.push(idAnge);
		creerPerksAnge(idAnge);
			
		var idErmite = bllClasses.add(null, 'Ermite', 'Méfiez-vous de son air paisible.', idNature, ['DEX'], null);
		classes.push(idErmite);
		var idDemon = bllClasses.add(null, 'Démon', 'Prince de la destruction', idChaos, ['RES'], null);
		classes.push(idDemon);
		var idAssassin = bllClasses.add(null, 'Assassin', 'Ne croisez pas son chemin.', idEsprit, ['PER'], null);
		classes.push(idAssassin);
		var idHorreur = bllClasses.add(null, 'Horreur', 'Votre plus grand cauchemar.', idTenebre, ['RAP'], null);
		classes.push(idHorreur);

		classes.push(bllClasses.add(null, 'Moine', 'Ardent défenseur de la foi.', idLumiere, [/*'FOR', */'RES', 'MEN'], idAnge));
		classes.push(bllClasses.add(null, 'Chevalier', 'Protecteur des faibles et bras armé de la justice.', idLumiere, ['DEX', 'RES'], idAnge));
		//classes.push(bllClasses.add(null, 'Paladin', 'Chevalier investi de pouvoirs divins.', idLumiere, ['DEX', 'FOR', 'MEN']));
		classes.push(bllClasses.add(null, 'Enchanteur', 'Détenteur de savoirs anciens, et magicien émérite.', idLumiere, [/*'RAP',*/ 'PER', 'MEN'], idAnge));
	
		//classes.push(bllClasses.add(null, 'Ermite', 'Rusé et pas si seul.', idNature, ['RAP', 'RES', 'MEN']));
		classes.push(bllClasses.add(null, 'Ranger', 'Bon pied bon oeil.', idNature, ['RAP', 'PER'/*, 'DEX'*/], idErmite));
		classes.push(bllClasses.add(null, 'Druide', 'Gardien des savoirs ancestraux.', idNature, ['PER', /*'RES',*/ 'RES'], idErmite));
		classes.push(bllClasses.add(null, 'Protecteur', 'Véritable force de la nature.', idNature, ['FOR', 'RES'/*, 'MEN'*/], idErmite));
	
		classes.push(bllClasses.add(null, 'Artificier', 'BoOm !', idChaos, [/*'RAP',*/ 'PER', 'DEX'], idDemon));
		//classes.push(bllClasses.add(null, 'Pillard', 'Charognard, sournois et cruel.', idChaos, ['RAP', 'FOR', 'RES']));
		classes.push(bllClasses.add(null, 'Berserker', 'Violent et incontrolable.', idChaos, ['RAP', /*'DEX',*/ 'FOR'], idDemon));
		classes.push(bllClasses.add(null, 'Pyromancien', 'Maîtrise les arcanes du feu.', idChaos, ['RAP', /*'PER'*/, 'MEN'], idDemon));
	
		classes.push(bllClasses.add(null, 'Elementaire', 'Imperturbable.', idEsprit, ['FOR', /*'RES',*/ 'MEN'], idAssassin));
		classes.push(bllClasses.add(null, 'Duelliste', 'Rapide et précis.', idEsprit, ['RAP', /*'PER',*/ 'DEX'], idAssassin));
		//classes.push(bllClasses.add(null, 'Génie', 'Cruel et malfaisant.', idEsprit, ['RAP', 'DEX', 'MEN']));
		classes.push(bllClasses.add(null, 'Mage', 'La puissance de l\'esprit.', idEsprit, ['RAP', /*'PER',*/ 'MEN'], idAssassin));
	
		//classes.push(bllClasses.add(null, 'Brute', 'Bête et méchant.', idTenebre, ['DEX', 'FOR', 'RES']));
		classes.push(bllClasses.add(null, 'Chevalier noir', 'Protecteur des forts et bras armé de l\'injustice.', idTenebre, ['DEX', 'FOR'/*, 'RES'*/ /*MEN*/], idHorreur));
		classes.push(bllClasses.add(null, 'Liche', 'Se nourrit des vivants.', idTenebre, ['PER', 'FOR'], idHorreur));
		classes.push(bllClasses.add(null, 'Sombremage', 'Morts ! Levez-vous !', idTenebre, ['DEX', 'MEN'], idHorreur));
	}

	if(bllEquipments.getAll().count() === 0) {
		bllEquipments.generate(null, 50, null);
		
		// generation de n equipements spécifiques par classe
		_.each(classes, function(element, index, list) {
			console.log('ajout d\'equipements pour la classe \'' + element + '\'');
			bllEquipments.generate(null, 5, element);
		});
	}	
	
	if(bllSkills.getAll().count() === 0 && bllSkills.getAll().count() === 0) {
		bllSkills.generate(null);
	}

	if(bllNews.getAll().count() === 0) {
		bllNews.add(null, '1', 'body content', 'Arène', 'SUCCESS', null);
	}	

	var idChapter1 = null;
	var idChapter2 = null;
	var idTeam1 = null;
	var idTeam2 = null;
	var idTeam3 = null;
	var idGlad1 = null;
	var idGlad2 = null;
	var idGlad3 = null;
	var idGlad4 = null;
	var idGlad5 = null;
	var idGlad6 = null;
	
	if(bllChapters.getAll().count() === 0) {
		idChapter1 = bllChapters.add(null, "ORDRE", "Le chapitre des débutants !");
		idChapter2 = bllChapters.add(null, "COALITION", "Destruction !");
		
		if(bllTeams.getAll().count() === 0) {
			idTeam1 = bllTeams.add(null, "N00B", "triple", idChapter1);
			idTeam2 = bllTeams.add(null, "Evil", "Mansion", idChapter1);
			idTeam3 = bllTeams.add(null, "Tortoise", "Hydrocanon", idChapter2);
			
			if(bllGladiators.getAll().count() === 0) {
				var attributes = { 'rap': 15, 'per': 20, 'dex': 10, 'for': 5, 'res': 20, 'men': 20 };
				idGlad1 = bllGladiators.add(null, "Conan", "le barbare", attributes, "FOR", idTeam1, classes[0]);
				attributes = { 'rap': 5, 'per': 30, 'dex': 5, 'for': 10, 'res': 15, 'men': 25 };
				idGlad2 = bllGladiators.add(null, "Azur", "maril", attributes, "FOR", idTeam2, classes[1]);
				attributes = { 'rap': 10, 'per': 5, 'dex': 10, 'for': 5, 'res': 30, 'men': 30 };
				idGlad3 = bllGladiators.add(null, "Bob", "lenon", attributes, "FOR", idTeam2, classes[2]);
				attributes = { 'rap': 20, 'per': 10, 'dex': 30, 'for': 5, 'res': 15, 'men': 10 };
				idGlad4 = bllGladiators.add(null, "Daryl Mak", "sun it", attributes, "FOR", idTeam3, classes[3]);
				attributes = { 'rap': 30, 'per': 30, 'dex': 5, 'for': 5, 'res': 15, 'men': 5 };
				idGlad5 = bllGladiators.add(null, "Ex Tend Fak", "Faux ami", attributes, "FOR", idTeam3, classes[4]);
				attributes = { 'rap': 5, 'per': 5, 'dex': 30, 'for': 30, 'res': 5, 'men': 15 };
				idGlad6 = bllGladiators.add(null, "Fred Erik ", "le viking", attributes, "FOR", idTeam3, classes[5]);
			}	
		}	
	}

	if(bllFights.getAll().count() === 0 && idChapter1 != null && idChapter2 != null 
			&& idTeam1 != null && idTeam2 != null && idTeam3 != null
			&& idGlad1 != null && idGlad2 != null && idGlad3 != null
			&& idGlad4 != null && idGlad5 != null && idGlad6 != null) {
		var gladiators = [];
		gladiators.push( { 	idFightTeam : 1, idGladiator : idGlad1 });
		gladiators.push( { 	idFightTeam : 1, idGladiator : idGlad2 });
		gladiators.push( { 	idFightTeam : 1, idGladiator : idGlad3 });
		gladiators.push( { 	idFightTeam : 2, idGladiator : idGlad4 });
		gladiators.push( { 	idFightTeam : 2, idGladiator : idGlad5 });
		gladiators.push( { 	idFightTeam : 2, idGladiator : idGlad6 });
			
		var idFight = bllFights.add(null, 0, gladiators);
		
/*		var idFightTeam1 = bllFightTeams.add(null, idFight, '#90C3D4');
		var idFightTeam2 = bllFightTeams.add(null, idFight, '#D4A190');
		var idFightGladiator1 = bllFightGladiators.add(null, idFightTeam1, idGlad1);
		var idFightGladiator1 = bllFightGladiators.add(null, idFightTeam1, idGlad2);
		var idFightGladiator1 = bllFightGladiators.add(null, idFightTeam1, idGlad3);
		var idFightGladiator1 = bllFightGladiators.add(null, idFightTeam2, idGlad4);
		var idFightGladiator1 = bllFightGladiators.add(null, idFightTeam2, idGlad5);
		var idFightGladiator1 = bllFightGladiators.add(null, idFightTeam2, idGlad6);
*/		
	}	
} 

Meteor.startup(function () {
    // code to run on server at startup
	  console.log("startup");
	  
	  creerDonneesBase();
	  console.log("startup end");
  });
