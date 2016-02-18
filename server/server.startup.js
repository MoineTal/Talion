var creerPerk = function(user, name, desc, idClasse, rap, per, dex, force, res, men, foc, dan, sur, letal, effects, prerequis) {
	prerequis = prerequis || { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
	var attributes = { 'rap': rap, 'per': per, 'dex': dex, 'for': force, 'res': res, 'men': men };
	var fightMisc = { 'foc': foc, 'dan': dan, 'sur': sur, 'let': letal };	
	bllPerks.add(user, name, desc, idClasse, attributes, fightMisc, effects, prerequis);
}

var creerDonneesBase = function() {
	
	var classes = [];

	if(bllPerks.getAll().count() === 0 && bllPerks.getAll().count() === 0) {
		var effects = null;
		var prerequis = null;
		creerPerk(null, "Agile", "Un peu plus rapide que la moyenne...", null, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Attentif", "Un peu plus attentif que la moyenne...", null, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Souple", "Un peu plus souple que la moyenne...", null, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Trapu", "Un peu plus fort que la moyenne...", null, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Résistant", "Un peu plus résistant que la moyenne...", null, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Volontaire", "Un peu plus volontaire que la moyenne...", null, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Concentré", "Un peu plus concentré que la moyenne...", null, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Inquiétant", "Un quelque chose de dérangeant...", null, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, effects, prerequis);
		creerPerk(null, "Endurant", "Sait prendre les coups.", null, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, effects, prerequis);
		creerPerk(null, "Brutal", "Il fait mal, et ça lui plait.", null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, effects, prerequis);
		creerPerk(null, "Nerveux", "Agité de tics, et très rapide.", null, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Observateur", "Il identifie les faiblesses de ses adversaires.", null, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Habile", "Sait manier tout type d'arme.", null, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Fort", "Des muscles saillants", null, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Inébranlable", "Le faire chuter tient de la performance !", null, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Déterminé", "Il ne s'en laisse pas compter.", null, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Focalisé", "Se choisit un objectif, et s'y tient !", null, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Menaçant", "Ses adversaires sont obligés de l'avoir à l'oeil !", null, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, effects, prerequis);
		creerPerk(null, "Survivant", "une capacité à survivre étonnante !", null, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, effects, prerequis);
		creerPerk(null, "Cruel", "Aime faire souffrir", null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, effects, prerequis);
		creerPerk(null, "Véloce", "Difficile de le suivre.", null, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Vigilant", "Rien ne lui échappe !", null, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Infaillible", "Ne rate jamais sa cible.", null, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Puissant", "Une force qui impose le respect.", null, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Invincible", "Les coups semblent ne rien lui faire...", null, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Obstiné", "Une vraie force de caractère !", null, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Maniaque", "Semble ne rien savoir faire d'autre que son objectif du moment.", null, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, effects, prerequis);
		creerPerk(null, "Terrifiant", "Sa simple présence encourage les défections.", null, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, effects, prerequis);
		creerPerk(null, "Increvable", "Même réduit en charpie, il bouge encore...", null, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, effects, prerequis);
		creerPerk(null, "Sanguinaire", "Adepte de la décoration extérieure", null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, effects, prerequis);
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
		creerPerk(null, "Précis", "Une précision...divine !", id, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, null, null);
		creerPerk(null, "Bienveillant", "Il aime son prochain", id, 0, 2, 0, 2, 1, 0, 2, -2, 0, -2, null, null);
			
		var idErmite = bllClasses.add(null, 'Ermite', 'Méfiez-vous de son air paisible.', idNature, ['DEX'], null);
		classes.push(idErmite);
		creerPerk(null, "Discret", "Se fond dans le décor", id, 0, 0, 2, 0, 0, 0, 0, -2, 0, 0, null, null);
		creerPerk(null, "Vif", "Difficile de le suivre", id, 2, 2, 1, 0, -1, 0, 0, 0, 0, 0, null, null);
		
		var idDemon = bllClasses.add(null, 'Démon', 'Prince de la destruction', idChaos, ['RES'], null);
		classes.push(idDemon);
		creerPerk(null, "Colossal", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "Mortel", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);

		var idAssassin = bllClasses.add(null, 'Assassin', 'Ne croisez pas son chemin.', idEsprit, ['PER'], null);
		classes.push(idAssassin);
		creerPerk(null, "Invisible", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "Rusé", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);

		var idHorreur = bllClasses.add(null, 'Horreur', 'Votre plus grand cauchemar.', idTenebre, ['RAP'], null);
		classes.push(idHorreur);
		creerPerk(null, "TODO", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "TODO", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);

		var idMoine = bllClasses.add(null, 'Moine', 'Ardent défenseur de la foi.', idLumiere, [/*'FOR', */'RES', 'MEN'], idAnge);
		classes.push(idMoine);
		creerPerk(null, "Imperturbable", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "Prudent", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		
		var idChevalier = bllClasses.add(null, 'Chevalier', 'Protecteur des faibles et bras armé de la justice.', idLumiere, ['DEX', 'RES'], idAnge);
		classes.push(idChevalier);
		creerPerk(null, "Emérite", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "Musclé", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);

		//classes.push(bllClasses.add(null, 'Paladin', 'Chevalier investi de pouvoirs divins.', idLumiere, ['DEX', 'FOR', 'MEN']));
		var idEnchanteur = bllClasses.add(null, 'Enchanteur', 'Détenteur de savoirs anciens, et magicien émérite.', idLumiere, [/*'RAP',*/ 'PER', 'MEN'], idAnge);
		classes.push(idEnchanteur);
		creerPerk(null, "Intelligent", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "Brillant", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
	
		//classes.push(bllClasses.add(null, 'Ermite', 'Rusé et pas si seul.', idNature, ['RAP', 'RES', 'MEN']));
		var idRanger = bllClasses.add(null, 'Ranger', 'Bon pied bon oeil.', idNature, ['RAP', 'PER'/*, 'DEX'*/], idErmite);
		classes.push(idRanger);
		creerPerk(null, "Furtif", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "Astucieux", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
	
		var idDruide = bllClasses.add(null, 'Druide', 'Gardien des savoirs ancestraux.', idNature, ['PER', /*'RES',*/ 'RES'], idErmite);
		classes.push(idDruide);
		creerPerk(null, "Clairvoyant", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "Primitif", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
	
		var idProtecteur = bllClasses.add(null, 'Protecteur', 'Véritable force de la nature.', idNature, ['FOR', 'RES'/*, 'MEN'*/], idErmite);
		classes.push(idProtecteur);
		creerPerk(null, "Invulnérable", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "Destructeur", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		
		var idArtificier = bllClasses.add(null, 'Artificier', 'BoOm !', idChaos, [/*'RAP',*/ 'PER', 'DEX'], idDemon);
		classes.push(idArtificier);
		creerPerk(null, "Minutieux", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "Perfectioniste", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
	
		//classes.push(bllClasses.add(null, 'Pillard', 'Charognard, sournois et cruel.', idChaos, ['RAP', 'FOR', 'RES']));
		var idBerserker = bllClasses.add(null, 'Berserker', 'Violent et incontrolable.', idChaos, ['RAP', /*'DEX',*/ 'FOR'], idDemon);
		classes.push(idBerserker);
		creerPerk(null, "Barbare", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "Kamikaze", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
	
		var idPyromancien = bllClasses.add(null, 'Pyromancien', 'Maîtrise les arcanes du feu.', idChaos, ['RAP', /*'PER'*/, 'MEN'], idDemon);
		classes.push(idPyromancien);
		creerPerk(null, "Fou", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "Frèle", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		
		var idElementaire = bllClasses.add(null, 'Elementaire', 'Imperturbable.', idEsprit, ['FOR', /*'RES',*/ 'MEN'], idAssassin);
		classes.push(idElementaire);
		creerPerk(null, "Mystérieux", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "Implacable", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
	
		var idDuelliste = bllClasses.add(null, 'Duelliste', 'Rapide et précis.', idEsprit, ['RAP', /*'PER',*/ 'DEX'], idAssassin);
		classes.push(idDuelliste);
		creerPerk(null, "Virtuose", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "Maître d'arme", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
	
		//classes.push(bllClasses.add(null, 'Génie', 'Cruel et malfaisant.', idEsprit, ['RAP', 'DEX', 'MEN']));
		var idMage = bllClasses.add(null, 'Mage', 'La puissance de l\'esprit.', idEsprit, ['RAP', /*'PER',*/ 'MEN'], idAssassin);
		classes.push(idMage);
		creerPerk(null, "Distrait", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "Savant", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
	
		//classes.push(bllClasses.add(null, 'Brute', 'Bête et méchant.', idTenebre, ['DEX', 'FOR', 'RES']));
		var idChevalierNoir = bllClasses.add(null, 'Chevalier noir', 'Protecteur des forts et bras armé de l\'injustice.', idTenebre, ['DEX', 'FOR'/*, 'RES'*/ /*MEN*/], idHorreur);
		classes.push(idChevalierNoir);
		creerPerk(null, "Féroce", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "Sauvage", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
	
		var idLiche = bllClasses.add(null, 'Liche', 'Se nourrit des vivants.', idTenebre, ['PER', 'FOR'], idHorreur);
		classes.push(idLiche);
		creerPerk(null, "Inquisiteur", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "Impitoyable", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
	
		var idSombremage = bllClasses.add(null, 'Sombremage', 'Morts ! Levez-vous !', idTenebre, ['DEX', 'MEN'], idHorreur);
		classes.push(idSombremage);
		creerPerk(null, "Perspicace", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
		creerPerk(null, "Discipliné", "TODO", id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, null);
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
