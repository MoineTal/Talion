var data = [{
	name : '0.1',
	desc : 'Initialisation des données du jeu.',
	/* date : <inserer date d'application>,*/
	chapters : [
		{ code:'EMP', name:'Empire', desc:'Empire millénaire, gardien de l\'ordre établi et des traditions.' },
		{ code:'REB', name:'Rebellion', desc:'Frondeurs et idéalistes, ils se sont rassemblés pour gagner leur Liberté.' },
		{ code:'CAR', name:'Cartels', desc:'Opportunistes ou simples brigands, ils vivent en marge de la société et profitent de chaque occasion pour augmenter leurs richesses.' }
	],
	domains : [
		{ code:'LUM', name:'Lumière', desc:'Domaine de l\'ordre, de la justice et de la pureté.' },
		{ code:'TEN', name:'Ténèbres', desc:'Domaine du mal, de la peur et de la mort.' },
		{ code:'CHA', name:'Chaos', desc:'Domaine de la guerre, de la destruction et de la colère.' },
		{ code:'NAT', name:'Nature', desc:'Domaine de la vie, de la nature et de la croissance.' },
		{ code:'ESP', name:'Esprit', desc:'Domaine de la connaissance, de l\'illusion et de la précision.' }
	],
	classes : [
		{ code:'ANG', name:'Ange', desc:'Guerrier céleste.', attr:['FOR'], domain:'LUM', superClasse:null },
		{ code:'HOR', name:'Horreur', desc:'Votre plus grand cauchemar.', attr:['RAP'], domain:'TEN', superClasse:null },
		{ code:'DEM', name:'Démon', desc:'Prince de la destruction.', attr:['RES'], domain:'CHA', superClasse:null },
		{ code:'ERM', name:'Ermite', desc:'Méfiez-vous de son air paisible.', attr:['DEX'], domain:'NAT', superClasse:null },
		{ code:'ASS', name:'Assassin', desc:'Ne croisez pas son chemin.', attr:['PER'], domain:'ESP', superClasse:null },
		{ code:'MOI', name:'Moine', desc:'Ardent défenseur de la foi.', attr:['RES', 'MEN'], domain:'LUM', superClasse:'ANG' },
		{ code:'CHE', name:'Chevalier', desc:'Protecteur des faibles et bras armé de la justice.', attr:['DEX', 'RES'], domain:'LUM', superClasse:'ANG' },
		{ code:'ENC', name:'Enchanteur', desc:'Détenteur de savoirs anciens, et magicien émérite.', attr:['PER', 'MEN'], domain:'LUM', superClasse:'ANG' },
		{ code:'CHN', name:'Chevalier noir', desc:'Protecteur des forts et bras armé de l\'injustice.', attr:['DEX', 'FOR'], domain:'TEN', superClasse:'HOR' },
		{ code:'LIC', name:'Liche', desc:'Se nourrit des vivants.', attr:['PER', 'FOR'], domain:'TEN', superClasse:'HOR' },
		{ code:'SOM', name:'Sombremage', desc:'Morts ! Levez-vous !', attr:['DEX', 'MEN'], domain:'TEN', superClasse:'HOR' },
		{ code:'ART', name:'Artificier', desc:'BoOm !', attr:['PER', 'DEX'], domain:'CHA', superClasse:'DEM' },
		{ code:'BER', name:'Berserker', desc:'Violent et incontrolable.', attr:['RAP', 'FOR'], domain:'CHA', superClasse:'DEM' },
		{ code:'PYR', name:'Pyromancien', desc:'Maîtrise les arcanes du feu.', attr:['RAP', 'MEN'], domain:'CHA', superClasse:'DEM' },
		{ code:'RAN', name:'Ranger', desc:'Bon pied bon oeil.', attr:['RAP', 'PER'], domain:'NAT', superClasse:'ERM' },
		{ code:'DRU', name:'Druide', desc:'Gardien des savoirs ancestraux.', attr:['PER', 'RES'], domain:'NAT', superClasse:'ERM' },
		{ code:'PRO', name:'Protecteur', desc:'Véritable force de la nature.', attr:['FOR', 'RES'], domain:'NAT', superClasse:'ERM' },
		{ code:'ELE', name:'Elementaire', desc:'Imperturbable.', attr:['FOR', 'MEN'], domain:'ESP', superClasse:'ASS' },
		{ code:'DUE', name:'Duelliste', desc:'Rapide et précis.', attr:['RAP', 'DEX'], domain:'ESP', superClasse:'ASS' },
		{ code:'MAG', name:'Mage', desc:'La puissance de l\'esprit.', attr:['RAP', 'MEN'], domain:'ESP', superClasse:'ASS' }
	],
	perks : [
		{ code:'AGI', name:'Agile', desc:'Un peu plus rapide que la moyenne...', 						classe:null, rap:2 , per:1 , dex:0 , force:0 , res:0 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'ATT', name:'Attentif', desc:'Un peu plus attentif que la moyenne...', 					classe:null, rap:1 , per:2 , dex:0 , force:0 , res:0 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'SOU', name:'Souple', desc:'Un peu plus souple que la moyenne...', 						classe:null, rap:0 , per:1 , dex:2 , force:0 , res:0 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'TRA', name:'Trapu', desc:'Un peu plus fort que la moyenne...', 							classe:null, rap:0 , per:0 , dex:0 , force:2 , res:1 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'RES', name:'Résistant', desc:'Un peu plus résistant que la moyenne...', 				classe:null, rap:0 , per:0 , dex:0 , force:1 , res:2 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'VOL', name:'Volontaire', desc:'Un peu plus volontaire que la moyenne...', 				classe:null, rap:0 , per:0 , dex:0 , force:0 , res:0 , men:2 , foc:1 , mnc:0 , sur:0 , letal:0 },
		{ code:'CON', name:'Concentré', desc:'Un peu plus concentré que la moyenne...', 				classe:null, rap:0 , per:0 , dex:0 , force:0 , res:0 , men:1 , foc:2 , mnc:0 , sur:0 , letal:0 },
		{ code:'INQ', name:'Inquiétant', desc:'Un quelque chose de dérangeant...', 						classe:null, rap:0 , per:0 , dex:0 , force:0 , res:0 , men:0 , foc:0 , mnc:2 , sur:0 , letal:1 },
		{ code:'END', name:'Endurant', desc:'Sait prendre les coups.', 									classe:null, rap:0 , per:0 , dex:0 , force:0 , res:1 , men:0 , foc:0 , mnc:0 , sur:2 , letal:0 },
		{ code:'BRU', name:'Brutal', desc:'Il fait mal, et ça lui plait.', 								classe:null, rap:0 , per:0 , dex:0 , force:1 , res:0 , men:0 , foc:0 , mnc:0 , sur:0 , letal:2 },
		{ code:'NER', name:'Nerveux', desc:'Agité de tics, et très rapide.', 							classe:null, rap:2 , per:0 , dex:1 , force:0 , res:0 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'OBS', name:'Observateur', desc:'Il identifie les faiblesses de ses adversaires.', 		classe:null, rap:0 , per:2 , dex:0 , force:0 , res:0 , men:0 , foc:1 , mnc:0 , sur:0 , letal:0 },
		{ code:'HAB', name:'Habile', desc:'Sait manier tout type d\'arme.', 							classe:null, rap:0 , per:0 , dex:2 , force:1 , res:0 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'FOR', name:'Fort', desc:'Des muscles saillants.', 										classe:null, rap:0 , per:0 , dex:0 , force:2 , res:0 , men:0 , foc:0 , mnc:1 , sur:0 , letal:0 },
		{ code:'INE', name:'Inébranlable', desc:'Le faire chuter tient de la performance !', 			classe:null, rap:0 , per:0 , dex:0 , force:0 , res:2 , men:0 , foc:0 , mnc:1 , sur:0 , letal:0 },
		{ code:'DET', name:'Déterminé', desc:'Il ne s\'en laisse pas compter.', 						classe:null, rap:0 , per:0 , dex:0 , force:0 , res:0 , men:2 , foc:0 , mnc:1 , sur:0 , letal:0 },
		{ code:'FOC', name:'Focalisé', desc:'Se choisit un objectif, et s\'y tient !', 					classe:null, rap:0 , per:0 , dex:0 , force:0 , res:0 , men:0 , foc:2 , mnc:0 , sur:0 , letal:1 },
		{ code:'MEN', name:'Menaçant', desc:'Ses adversaires sont obligés de l\'avoir à l\'oeil !', 	classe:null, rap:0 , per:0 , dex:0 , force:0 , res:0 , men:0 , foc:1 , mnc:2 , sur:0 , letal:0 },
		{ code:'SUR', name:'Survivant', desc:'Une capacité à survivre étonnante !', 					classe:null, rap:0 , per:0 , dex:0 , force:0 , res:0 , men:1 , foc:0 , mnc:0 , sur:2 , letal:0 },
		{ code:'CRU', name:'Cruel', desc:'Aime faire souffrir.', 										classe:null, rap:0 , per:0 , dex:0 , force:0 , res:0 , men:0 , foc:0 , mnc:1 , sur:0 , letal:2 },
		{ code:'VEL', name:'Véloce', desc:'Difficile de le suivre.', 									classe:null, rap:3 , per:0 , dex:0 , force:0 , res:0 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'VIG', name:'Vigilant', desc:'Rien ne lui échappe !', 									classe:null, rap:0 , per:3 , dex:0 , force:0 , res:0 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'INF', name:'Infaillible', desc:'Ne rate jamais sa cible.', 								classe:null, rap:0 , per:0 , dex:3 , force:0 , res:0 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'PUI', name:'Puissant', desc:'Une force qui impose le respect.', 						classe:null, rap:0 , per:0 , dex:0 , force:3 , res:0 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'INV', name:'Invincible', desc:'Les coups semblent ne rien lui faire...', 				classe:null, rap:0 , per:0 , dex:0 , force:0 , res:3 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'OBN', name:'Obstiné', desc:'Une vraie force de caractère !', 							classe:null, rap:0 , per:0 , dex:0 , force:0 , res:0 , men:3 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'MAN', name:'Maniaque', desc:'Semble ne rien savoir faire d\'autre que son objectif du moment.', classe:null, rap:0 , per:0 , dex:0 , force:0 , res:0 , men:3 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'TER', name:'Terrifiant', desc:'Sa simple présence encourage les défections.', 			classe:null, rap:0 , per:0 , dex:0 , force:0 , res:0 , men:0 , foc:0 , mnc:3 , sur:0 , letal:0 },
		{ code:'INC', name:'Increvable', desc:'Même réduit en charpie, il bouge encore...', 			classe:null, rap:0 , per:0 , dex:0 , force:0 , res:0 , men:0 , foc:0 , mnc:0 , sur:3 , letal:0 },
		{ code:'SAN', name:'Sanguinaire', desc:'Adepte de la décoration extérieure.', 					classe:null, rap:0 , per:0 , dex:0 , force:0 , res:0 , men:0 , foc:0 , mnc:0 , sur:0 , letal:3 },
		{ code:'PRE', name:'Précis', desc:'Une précision...divine !', 									classe:'ANG', rap:0 , per:0 , dex:2 , force:0 , res:0 , men:0 , foc:2 , mnc:0 , sur:0 , letal:0 },
		{ code:'BIE', name:'Bienveillant', desc:'Il aime son prochain.', 								classe:'ANG', rap:0 , per:2 , dex:0 , force:2 , res:1 , men:0 , foc:2 , mnc:-2 , sur:0 , letal:-5 },
		{ code:'DIS', name:'Discret', desc:'Ne fait pas un bruit.', 									classe:'ERM', rap:0 , per:0 , dex:2 , force:0 , res:0 , men:0 , foc:0 , mnc:-2 , sur:0 , letal:0 },
		{ code:'VIF', name:'Vif', desc:'Difficile de le suivre.', 										classe:'ERM', rap:2 , per:2 , dex:1 , force:0 , res:-1 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'COL', name:'Colossal', desc:'Est tombé une fois...de sommeil.', 						classe:'DEM', rap:0 , per:0 , dex:0 , force:3 , res:3 , men:0 , foc:-3 , mnc:2 , sur:0 , letal:0 },
		{ code:'MOR', name:'Mortel', desc:'Un seul coup suffit.', 										classe:'DEM', rap:0 , per:0 , dex:0 , force:1 , res:0 , men:0 , foc:-1 , mnc:3 , sur:-3 , letal:4 },
		{ code:'IVB', name:'Invisible', desc:'Ce qu\'on ne voit pas n\'est pas inquiétant.', 			classe:'ASS', rap:1 , per:1 , dex:0 , force:-2 , res:-2 , men:0 , foc:0 , mnc:-6 , sur:0 , letal:0 },
		{ code:'RUS', name:'Rusé', desc:'Trouve toujours une combine pour arriver à ses fins.', 		classe:'ASS', rap:0 , per:3 , dex:0 , force:-3 , res:0 , men:0 , foc:2 , mnc:-2 , sur:0 , letal:0 },
		{ code:'CAU', name:'Cauchemardesque', desc:'Instille la peur à sa simple évocation.', 			classe:'HOR', rap:1 , per:0 , dex:0 , force:0 , res:0 , men:-2 , foc:0 , mnc:5 , sur:0 , letal:0 },
		{ code:'FOD', name:'Foudroyant', desc:'Frappe plus vite que son ombre.', 						classe:'HOR', rap:5 , per:-2 , dex:-2 , force:4 , res:-2 , men:0 , foc:-2 , mnc:3 , sur:0 , letal:0 },
		{ code:'IMP', name:'Imperturbable', desc:'Difficile de le distraire.', 							classe:'MOI', rap:-2 , per:-2 , dex:0 , force:3 , res:5 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'PRU', name:'Prudent', desc:'Se met en retrait pour mieux servir.', 						classe:'MOI', rap:0 , per:2 , dex:-1 , force:0 , res:2 , men:0 , foc:0 , mnc:-1 , sur:0 , letal:0 },
		{ code:'EME', name:'Emérite', desc:'Des années d\'entrainement.', 								classe:'CHE', rap:0 , per:2 , dex:2 , force:-1 , res:1 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'MUS', name:'Musclé', desc:'Il faut pouvoir porter ces armures rutillantes.', 			classe:'CHE', rap:0 , per:-3 , dex:2 , force:3 , res:2 , men:0 , foc:0 , mnc:1 , sur:0 , letal:0 },
		{ code:'INT', name:'Intelligent', desc:'Une grande soif de connaissances.', 					classe:'ENC', rap:0 , per:4 , dex:0 , force:-3 , res:0 , men:3 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'ERU', name:'Erudit', desc:'Erudit.', 													classe:'ENC', rap:0 , per:6 , dex:-4 , force:0 , res:-4 , men:6 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'FUR', name:'Furtif', desc:'Sait se fondre dans le décor.', 								classe:'RAN', rap:2 , per:0 , dex:0 , force:-1 , res:-1 , men:0 , foc:0 , mnc:-4 , sur:0 , letal:0 },
		{ code:'AST', name:'Astucieux', desc:'Connait mille tours.', 									classe:'RAN', rap:1 , per:1 , dex:1 , force:0 , res:0 , men:0 , foc:1 , mnc:-1 , sur:0 , letal:0 },
		{ code:'CLA', name:'Clairvoyant', desc:'Voit tout, devine tout.', 								classe:'DRU', rap:-2 , per:6 , dex:0 , force:0 , res:0 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'PRI', name:'Primitif', desc:'Robuste mais peu perspicace.', 							classe:'DRU', rap:2 , per:2 , dex:0 , force:2 , res:3 , men:-1 , foc:-4 , mnc:2 , sur:0 , letal:0 },
		{ code:'IVN', name:'Invulnérable', desc:'Une vraie force de la nature.', 						classe:'PRO', rap:-3 , per:-3 , dex:-3 , force:4 , res:5 , men:3 , foc:0 , mnc:1 , sur:0 , letal:0 },
		{ code:'DES', name:'Destructeur', desc:'Une puissance phénoménale.', 							classe:'PRO', rap:0 , per:0 , dex:-1 , force:5 , res:0 , men:-2 , foc:-2 , mnc:3 , sur:0 , letal:1 },
		{ code:'MIN', name:'Minutieux', desc:'S\'applique à ce que ses équipements soient parfaitement utilisables.', classe:'ART', rap:0 , per:1 , dex:2 , force:0 , res:0 , men:0 , foc:1 , mnc:0 , sur:0 , letal:0 },
		{ code:'PER', name:'Perfectionniste', desc:'Jamais pris en défaut.', 							classe:'ART', rap:-2 , per:3 , dex:3 , force:0 , res:0 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'BAR', name:'Barbare', desc:'Une violence extrême.', 									classe:'BER', rap:1 , per:-1 , dex:1 , force:3 , res:2 , men:-2 , foc:-3 , mnc:3 , sur:0 , letal:0 },
		{ code:'KAM', name:'Kamikaze', desc:'Le sacrifice de soi à l\'état pur.', 						classe:'BER', rap:2 , per:2 , dex:4 , force:3 , res:-5 , men:-5 , foc:0 , mnc:6 , sur:0 , letal:0 },
		{ code:'FOU', name:'Fou', desc:'Complètement imprévisible.', 									classe:'PYR', rap:4 , per:-5 , dex:0 , force:0 , res:0 , men:6 , foc:-5 , mnc:4 , sur:0 , letal:0 },
		{ code:'FRE', name:'Frèle', desc:'Une faible constitution peut s\'avérer être un avantage décisif.', classe:'PYR', rap:4 , per:0 , dex:2 , force:-1 , res:-3 , men:0 , foc:0 , mnc:-2 , sur:0 , letal:0 },
		{ code:'MYS', name:'Mystérieux', desc:'Mais qui est-il ?.', 									classe:'ELE', rap:0 , per:0 , dex:0 , force:1 , res:-1 , men:2 , foc:0 , mnc:2 , sur:0 , letal:0 },
		{ code:'IPL', name:'Implacable', desc:'Ira jusqu\'au bout de ses ressources.', 					classe:'ELE', rap:0 , per:0 , dex:1 , force:2 , res:0 , men:1 , foc:0 , mnc:1 , sur:0 , letal:0 },
		{ code:'VIR', name:'Virtuose', desc:'Un véritable spectacle.', 									classe:'DUE', rap:4 , per:4 , dex:5 , force:-3 , res:-3 , men:-3 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'MAR', name:'Maître d\'arme', desc:'Maîtrise tout type d\'arme.', 						classe:'DUE', rap:2 , per:0 , dex:6 , force:-2 , res:-2 , men:0 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'DST', name:'Distrait', desc:'Perdu dans ses pensées.', 									classe:'MAG', rap:0 , per:0 , dex:0 , force:0 , res:0 , men:3 , foc:-2 , mnc:-3 , sur:0 , letal:0 },
		{ code:'SAV', name:'Savant', desc:'Une bible de connaissances.', 								classe:'MAG', rap:0 , per:1 , dex:0 , force:0 , res:-4 , men:6 , foc:0 , mnc:0 , sur:0 , letal:0 },
		{ code:'FER', name:'Féroce', desc:'Un danger permanent.', 										classe:'CHN', rap:0 , per:0 , dex:1 , force:2 , res:1 , men:0 , foc:0 , mnc:1 , sur:-2 , letal:1 },
		{ code:'SAU', name:'Sauvage', desc:'Aucune notion de civilité.', 								classe:'CHN', rap:1 , per:0 , dex:1 , force:2 , res:0 , men:0 , foc:-1 , mnc:0 , sur:1 , letal:0 },
		{ code:'IQR', name:'Inquisiteur', desc:'Rien ne lui échappe !.', 								classe:'LIC', rap:-1 , per:4 , dex:0 , force:0 , res:0 , men:0 , foc:0 , mnc:1 , sur:0 , letal:0 },
		{ code:'IPY', name:'Impitoyable', desc:'Ne vous laisse aucunes chances.', 						classe:'LIC', rap:0 , per:1 , dex:-3 , force:3 , res:0 , men:0 , foc:0 , mnc:2 , sur:-2 , letal:3 },
		{ code:'PSP', name:'Perspicace', desc:'Visualise bien les dynamiques de groupes.', 				classe:'SOM', rap:-1 , per:2 , dex:3 , force:-1 , res:-1 , men:2 , foc:2 , mnc:-2 , sur:0 , letal:0 },
		{ code:'DSC', name:'Discipliné', desc:'Sait attendre le bon moment pour frapper.', 				classe:'SOM', rap:-3 , per:2 , dex:1 , force:0 , res:0 , men:2 , foc:1 , mnc:-1 , sur:1 , letal:0 }
	],
	skills : [
		{ type:'OFF', code:'ATT', name:'Attaquer', desc:'Frapper son ennemi jusqu\'à ce qu\'il soit KO ou mort.', 	cible:'cib', classe:null, vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'DEF', code:'REP', name:'Se reposer', desc:'Reprendre son souffle, pour repartir à l\'attaque.', 	cible:'me', classe:null, vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:10, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'SOU' },
		{ type:'OFF', code:'JUS', name:'Justice', desc:'La force de la justice', cible:'cib', classe:'ANG', vit:0, esq:0, tou:0, pui:10, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'DEF', code:'BEN', name:'Bénédiction', desc:'Que Dieu vous bénisse', cible:'all', classe:'ANG', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:4, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'OFF', code:'APP', name:'Apaisement', desc:'1', cible:'opp', classe:'ANG', vit:0, esq:0, tou:0, pui:-5, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'DEF', code:'CHE', name:'Chérubins', desc:'Des suivants', cible:'fam', classe:'ANG', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'TRA', name:'Traque', desc:'1', cible:'cib', classe:'ERM', vit:0, esq:0, tou:7, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:3 , mnc:0 , sur:0 , letal:0, affect:'SOU' },
		{ type:'DEF', code:'COU', name:'Couverture', desc:'1', cible:'cib', classe:'ERM', vit:0, esq:9, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'AGA', name:'Agaçant', desc:'1', cible:'opp', classe:'ERM', vit:0, esq:0, tou:0, pui:-6, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null, passive:true },
		{ type:'OFF', code:'TIT', name:'Titan', desc:'1', cible:'fam', classe:'ERM', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'ANE', name:'Anéantissement', desc:'1', cible:'cib', classe:'DEM', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:10, foc:0 , mnc:0 , sur:0 , letal:0, affect:'MOR' },
		{ type:'DEF', code:'ANN', name:'Annihilation', desc:'1', cible:'cib', classe:'DEM', vit:0, esq:0, tou:0, pui:0, vol:7, arm:0, vie:0, sou:0, mor:3, foc:0 , mnc:0 , sur:0 , letal:0, affect:'MOR' },
		{ type:'DEF', code:'PUI', name:'Puissance du Chaos', desc:'1', cible:'me', classe:'DEM', vit:0, esq:0, tou:0, pui:5, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null, passive:true },
		{ type:'OFF', code:'DEM', name:'Démons', desc:'1', cible:'fam', classe:'DEM', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'ASS', name:'Assassinat', desc:'1', cible:'cib', classe:'ASS', vit:0, esq:0, tou:10, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'OFF', code:'ETR', name:'Etranglement', desc:'1', cible:'cib', classe:'ASS', vit:0, esq:0, tou:10, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'SOU' },
		{ type:'DEF', code:'FUR', name:'Furtivité', desc:'1', cible:'me', classe:'ASS', vit:0, esq:5, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null, passive:true },
		{ type:'DEF', code:'COO', name:'Coordination', desc:'1', cible:'cib', classe:'ASS', vit:0, esq:0, tou:9, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'JAI', name:'Jaillissement', desc:'1', cible:'cib', classe:'HOR', vit:10, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'DEF', code:'PSY', name:'Attaque Psychique', desc:'1', cible:'cib', classe:'HOR', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:10, foc:0 , mnc:0 , sur:0 , letal:0, affect:'MOR' },
		{ type:'DEF', code:'TER', name:'Terreur', desc:'1', cible:'me', classe:'HOR', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:5 , sur:0 , letal:0, affect:null, passive:true },
		{ type:'OFF', code:'CNM', name:'Contrôle Mental', desc:'x% chance que la cible attaque quiconque lors de la proch. action', cible:'cib', classe:'HOR', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'EXO', name:'Exorcisme', desc:'1', cible:'cib', classe:'MOI', vit:0, esq:0, tou:0, pui:0, vol:7, arm:0, vie:0, sou:0, mor:3, foc:0 , mnc:0 , sur:0 , letal:0, affect:'MOR' },
		{ type:'DEF', code:'SOS', name:'Soins Sacrés', desc:'1', cible:'cib', classe:'MOI', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:9, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'DEF', code:'AUS', name:'Aura Sacrée', desc:'1', cible:'all', classe:'MOI', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:2, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null, passive:true },
		{ type:'OFF', code:'BAN', name:'Banissement', desc:'1', cible:'cib', classe:'MOI', vit:0, esq:0, tou:0, pui:-5, vol:-5, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'CHA', name:'Charge', desc:'Charge au bouclier', cible:'cib', classe:'CHE', vit:0, esq:0, tou:3, pui:0, vol:0, arm:7, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'OFF', code:'OPP', name:'Oppression', desc:'1', cible:'cib', classe:'CHE', vit:0, esq:0, tou:5, pui:0, vol:0, arm:0, vie:0, sou:5, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'SOU' },
		{ type:'DEF', code:'PRO', name:'Protection', desc:'1', cible:'me', classe:'CHE', vit:0, esq:0, tou:0, pui:0, vol:0, arm:5, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null, passive:true },
		{ type:'DEF', code:'GAR', name:'Gardes', desc:'1', cible:'fam', classe:'CHE', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'SUB', name:'Subjugation', desc:'1', cible:'cib', classe:'ENC', vit:0, esq:3, tou:0, pui:0, vol:3, arm:0, vie:0, sou:0, mor:4, foc:0 , mnc:0 , sur:0 , letal:0, affect:'MOR' },
		{ type:'DEF', code:'REG', name:'Regain', desc:'1', cible:'cib', classe:'ENC', vit:4, esq:0, tou:0, pui:0, vol:0, arm:0, vie:5, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'DEF', code:'SOU', name:'Soutien', desc:'1', cible:'cib', classe:'ENC', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:9, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'ENT', name:'Entraves', desc:'1', cible:'cib', classe:'ENC', vit:0, esq:-10, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'CHA', name:'Chasse', desc:'1', cible:'cib', classe:'RAN', vit:7, esq:3, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'OFF', code:'VIS', name:'Visée', desc:'1', cible:'cib', classe:'RAN', vit:0, esq:0, tou:3, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:7 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'DEF', code:'VIV', name:'Vivacité', desc:'1', cible:'me', classe:'RAN', vit:5, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null, passive:true },
		{ type:'OFF', code:'PIE', name:'Pièges', desc:'1', cible:'cib', classe:'RAN', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:3, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'SOU' },
		{ type:'DEF', code:'SOV', name:'Source de Vie', desc:'1', cible:'cib', classe:'DRU', vit:0, esq:0, tou:0, pui:0, vol:0, arm:2, vie:7, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'DEF', code:'VIT', name:'Vitalité', desc:'1', cible:'cib', classe:'DRU', vit:0, esq:0, tou:0, pui:0, vol:0, arm:2, vie:0, sou:7, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'DEF', code:'OUB', name:'Oubli', desc:'1', cible:'cib', classe:'DRU', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:-10, sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'ENC', name:'Enchevêtrement', desc:'1', cible:'opp', classe:'DRU', vit:0, esq:-5, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'BRU', name:'Brutalité', desc:'1', cible:'cib', classe:'PRO', vit:0, esq:0, tou:0, pui:7, vol:0, arm:3, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'DEF', code:'REN', name:'Renforcement', desc:'1', cible:'cib', classe:'PRO', vit:0, esq:0, tou:0, pui:0, vol:0, arm:9, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'DEF', code:'REG', name:'Régénération', desc:'1', cible:'me', classe:'PRO', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:5, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null, passive:true },
		{ type:'OFF', code:'SEI', name:'Séisme', desc:'1', cible:'cib', classe:'PRO', vit:0, esq:0, tou:0, pui:0, vol:0, arm:-10, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'BOM', name:'Bombardements', desc:'1', cible:'opp', classe:'ART', vit:0, esq:0, tou:5, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'OFF', code:'GAZ', name:'Gazs', desc:'1', cible:'tous', classe:'ART', vit:0, esq:0, tou:3, pui:0, vol:0, arm:0, vie:0, sou:3, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'SOU' },
		{ type:'OFF', code:'FUM', name:'Fumigènes', desc:'1', cible:'tous', classe:'ART', vit:0, esq:0, tou:-6, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'DEF', code:'SER', name:'Servants', desc:'1', cible:'fam', classe:'ART', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'EXE', name:'Exécution', desc:'1', cible:'cib', classe:'BER', vit:7, esq:0, tou:0, pui:3, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'OFF', code:'DES', name:'Destruction', desc:'1', cible:'cib', classe:'BER', vit:0, esq:0, tou:0, pui:14, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:-4 , letal:0, affect:'VIE' },
		{ type:'DEF', code:'SDS', name:'Soif de Sang', desc:'1', cible:'me', classe:'BER', vit:0, esq:0, tou:0, pui:5, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'CDG', name:'Cri de Guerre', desc:'1', cible:'opp', classe:'BER', vit:-2, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null, passive:true },
		{ type:'OFF', code:'CAO', name:'Chaos', desc:'1', cible:'cib', classe:'PYR', vit:0, esq:0, tou:0, pui:0, vol:5, arm:0, vie:0, sou:0, mor:5, foc:0 , mnc:0 , sur:0 , letal:0, affect:'MOR' },
		{ type:'OFF', code:'BDF', name:'Boule de Feu', desc:'1', cible:'opp', classe:'PYR', vit:0, esq:0, tou:0, pui:0, vol:5, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'OFF', code:'FLA', name:'Flammes', desc:'1', cible:'tous', classe:'PYR', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:-5, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'OFF', code:'IGN', name:'Ignition', desc:'1', cible:'cib', classe:'PYR', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:3, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'OFF', code:'EFF', name:'Effroi', desc:'1', cible:'cib', classe:'ELE', vit:0, esq:0, tou:0, pui:0, vol:5, arm:0, vie:0, sou:3, mor:2, foc:0 , mnc:0 , sur:0 , letal:0, affect:'MOR' },
		{ type:'DEF', code:'CON', name:'Concile', desc:'1', cible:'cib', classe:'ELE', vit:0, esq:0, tou:0, pui:0, vol:9, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'DEF', code:'CNT', name:'Concentration', desc:'1', cible:'cib', classe:'ELE', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:5 , mnc:0 , sur:0 , letal:0, affect:null, passive:true },
		{ type:'OFF', code:'PER', name:'Perdition', desc:'1', cible:'cib', classe:'ELE', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:-2, sou:0, mor:-1, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'OFF', code:'ESC', name:'Escrime', desc:'1', cible:'cib', classe:'DUE', vit:0, esq:0, tou:7, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:3 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'OFF', code:'HAR', name:'Harcèlement', desc:'1', cible:'cib', classe:'DUE', vit:3, esq:0, tou:7, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'SOU' },
		{ type:'DEF', code:'MAI', name:'Maîtrise', desc:'1', cible:'me', classe:'DUE', vit:0, esq:0, tou:5, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null, passive:true },
		{ type:'OFF', code:'DES', name:'Désarmement', desc:'1', cible:'cib', classe:'DUE', vit:0, esq:0, tou:-10, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'DOM', name:'Domination', desc:'1', cible:'cib', classe:'MAG', vit:3, esq:0, tou:0, pui:0, vol:4, arm:0, vie:0, sou:0, mor:3, foc:0 , mnc:0 , sur:0 , letal:0, affect:'MOR' },
		{ type:'OFF', code:'CON', name:'Contresort', desc:'x% chance - niveau à 1 cmp opp.', cible:'cib', classe:'MAG', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'DEF', code:'IMP', name:'Imperturbable', desc:'1', cible:'cib', classe:'MAG', vit:0, esq:0, tou:0, pui:0, vol:5, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null, passive:true },
		{ type:'DEF', code:'DSO', name:'Désorientation', desc:'1', cible:'cib', classe:'MAG', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:-10 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'ASS', name:'Assaut', desc:'1', cible:'cib', classe:'CHN', vit:0, esq:0, tou:3, pui:7, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'OFF', code:'PRS', name:'Persécution', desc:'1', cible:'cib', classe:'CHN', vit:0, esq:0, tou:3, pui:0, vol:0, arm:0, vie:0, sou:7, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'SOU' },
		{ type:'OFF', code:'DSL', name:'Désolation', desc:'1', cible:'opp', classe:'CHN', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:-5, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'DEF', code:'SBI', name:'Sbires', desc:'1', cible:'fam', classe:'CHN', vit:0, esq:0, tou:0, pui:5, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'DRA', name:'Drain', desc:'1', cible:'cib', classe:'LIC', vit:0, esq:0, tou:0, pui:5, vol:0, arm:0, vie:3, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'OFF', code:'EVA', name:'Evanescence', desc:'1', cible:'cib', classe:'LIC', vit:0, esq:7, tou:0, pui:3, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE'},
		{ type:'OFF', code:'DSP', name:'Désespoir', desc:'1', cible:'tous', classe:'LIC', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:-5 , letal:0, affect:null },
		{ type:'OFF', code:'DEL', name:'Déliquescence', desc:'1', cible:'tous', classe:'LIC', vit:0, esq:0, tou:0, pui:0, vol:0, arm:-5, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null },
		{ type:'OFF', code:'yyy', name:'yyy', desc:'1', cible:'cib', classe:'SOM', vit:0, esq:0, tou:5, pui:0, vol:0, arm:0, vie:0, sou:0, mor:3, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE' },
		{ type:'OFF', code:'TOU', name:'Tourment', desc:'1', cible:'opp', classe:'SOM', vit:0, esq:0, tou:0, pui:0, vol:2, arm:0, vie:0, sou:0, mor:3, foc:0 , mnc:0 , sur:0 , letal:0, affect:'MOR'},
		{ type:'OFF', code:'COR', name:'Corruption', desc:'1', cible:'opp', classe:'SOM', vit:0, esq:0, tou:0, pui:0, vol:0, arm:0, vie:-3, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:'VIE', passive:true },
		{ type:'OFF', code:'ABA', name:'Abandon', desc:'1', cible:'cib', classe:'SOM', vit:0, esq:0, tou:0, pui:0, vol:-10, arm:0, vie:0, sou:0, mor:0, foc:0 , mnc:0 , sur:0 , letal:0, affect:null }
	]
},
{
	name : '0.2',
	desc : 'Ajout de données de test.',
	teams : [
		{ code:'TES', name:'Test', chapter:'EMP', desc:'TODO.' },
		{ code:'HUT', name:'Hutt', chapter:'REB', desc:'TODO.' },
		{ code:'VAG', name:'Vagans', chapter:'CAR', desc:'TODO.' }
	]		
}];

/* Définit si la version a été appliquée */
var isVersionAppliquee = function(version) {
	check(version, String);
	console.log('Mods.versions.isVersionAppliquee ' + version);
	return (Versions.find({ name : version }).count() > 0);
}

/* Ajoute une version au système */
var addVersion = function(name, desc) {
	check(name, String);
	check(desc, String);
	console.log('Mods.versions.addVersion ' + name);
	return Versions.insert({
		name : name,
		desc : desc
	});
}

// TODO à mettre dans un module UTIL ou Operations
var calculerPrerequis = function(attributes, fightMisc, effects, attrPrerequis) {
	var prerequis  =[];
	if(!attrPrerequis) {
		attrPrerequis = { 'rap': 0, 'per': 0, 'dex': 0, 'for': 0, 'res': 0, 'men': 0 };
	}
	// TODO : calculer les prérequis en fonction des attributs et des effets
	if(attributes) {
		bllUtil.majAttributes(attrPrerequis, 'RAP', attributes.rap*config.perk.PREREQUIS_BASE);
		bllUtil.majAttributes(attrPrerequis, 'PER', attributes.per*config.perk.PREREQUIS_BASE);		
		bllUtil.majAttributes(attrPrerequis, 'DEX', attributes.dex*config.perk.PREREQUIS_BASE);		
		bllUtil.majAttributes(attrPrerequis, 'FOR', attributes.for*config.perk.PREREQUIS_BASE);		
		bllUtil.majAttributes(attrPrerequis, 'RES', attributes.res*config.perk.PREREQUIS_BASE);	
		bllUtil.majAttributes(attrPrerequis, 'MEN', attributes.men*config.perk.PREREQUIS_BASE);				

		bllUtil.majAttributes(attrPrerequis, 'FOC', fightMisc.foc*config.perk.PREREQUIS_BASE);
		bllUtil.majAttributes(attrPrerequis, 'DAN', fightMisc.dan*config.perk.PREREQUIS_BASE);
		bllUtil.majAttributes(attrPrerequis, 'SUR', fightMisc.sur*config.perk.PREREQUIS_BASE);
		bllUtil.majAttributes(attrPrerequis, 'LET', fightMisc.let*config.perk.PREREQUIS_BASE);

/*		console.log('rap=' + attrPrerequis.rap+ 
				';per=' + attrPrerequis.per+ 
				';dex=' + attrPrerequis.dex+ 
				';for=' + attrPrerequis.for+ 
				';res=' + attrPrerequis.res+ 
				';men=' +attrPrerequis.men)
*/		bllUtil.addPrerequis(prerequis, 'RAP', attrPrerequis.rap);				
		bllUtil.addPrerequis(prerequis, 'PER', attrPrerequis.per);				
		bllUtil.addPrerequis(prerequis, 'DEX', attrPrerequis.dex);				
		bllUtil.addPrerequis(prerequis, 'FOR', attrPrerequis.for);				
		bllUtil.addPrerequis(prerequis, 'RES', attrPrerequis.res);				
		bllUtil.addPrerequis(prerequis, 'MEN', attrPrerequis.men);				
	}
	
//	console.log('prerequis='+prerequis);
	return (prerequis.length > 0) ? prerequis : null;
}

/* Créé un perk à partir de la notation simplifiée des datas de version */
var createPerk = function(user, code, name, desc, idClasse, nameClasse, rap, per, dex, force, res, men, foc, dan, sur, letal, effects, prerequisAttr) {
	var attributes = { 'rap': rap, 'per': per, 'dex': dex, 'for': force, 'res': res, 'men': men };
	var fightMisc = { 'foc': foc, 'dan': dan, 'sur': sur, 'let': letal };	
	// calcul des prerequis
	var prerequis = calculerPrerequis(attributes, fightMisc, effects, prerequisAttr);
	
	Mods.perks.add(user, code, name, desc, idClasse, nameClasse, prerequis, attributes, fightMisc, effects);
}

/* créé une compétence à partir de la notation simplifiée des datas de version */
var createSkill = function(user, code, name, desc, verb, action, active, idClasse, type, initLvl, vit, esq, tou, pui, vol, arm, vie, sou, mor, foc , mnc , sur , letal) {
//	var addSkill = function(userId, name, desc, verb, action, active, idClasse, type, initLvl, prerequis, targetingEffects, effects, tests, succesEffects) {

}

/* Applique une version */
var appliquerVersion = function(element) {
	var retour = false;
	
	console.log('Mods.versions.appliquerVersion ' + element.name);
	
	try {
		
		// /!\ ATTENTION aux appels async ! _.each est sync sauf s'il existe des appels async dedans !
		
		// Chapitres
		if(element.chapters && element.chapters.length > 0) {
			_.each(element.chapters, function(element, index, list) {
				var id = Mods.chapters.add(null, element.code, element.name, element.desc);
	    	});
		}
		
		// Domaines
		if(element.domains && element.domains.length > 0) {
			_.each(element.domains, function(element, index, list) {
				var id = Mods.domains.add(null, element.code, element.name, element.desc);
	    	});
		}

		// TODO attendre que les domaines soient créés !
		
		// Classes
		if(element.classes && element.classes.length > 0) {
			_.each(element.classes, function(element, index, list) {
				var domain = element.domain && Mods.domains.getByCode(element.domain);
				var classe = element.superClasse && Mods.classes.getByCode(element.superClasse);
				var id = Mods.classes.add(null, element.code, element.name, element.desc, 
						(domain ? domain._id : null), element.attr, (classe ? classe._id : null));
	    	});
		}

		// Perks
		if(element.perks && element.perks.length > 0) {
			_.each(element.perks, function(element, index, list) {
				var classe = element.classe && Mods.classes.getByCode(element.classe);
				var id = createPerk(null, element.code, element.name, element.desc, (classe ? classe._id : null), (classe ? classe.name : null), element.rap, 
						element.per, element.dex, element.force, element.res, element.men, element.foc, element.mnc, element.sur, element.letal, 
						null, null);
	    	});
		}

		// Skills
		if(element.skills && element.skills.length > 0) {
			_.each(element.skills, function(element, index, list) {
				var classe = element.classe && Mods.classes.getByCode(element.classe);
				var id = Mods.skills.add(null, element.type, element.code, element.name, element.desc, element.cible, classe, 
					element.vit, element.esq, element.tou, element.pui, element.vol, element.arm, element.vie, element.sou, element.mor, 
					element.foc, element.mnc, element.sur, element.letal, element.affect, element.passive, element.noTest);
	    	});
		}

		// sauvegarde la version
		addVersion(element.name, element.desc);	
		
		retour = true;
	} catch (err) {
		console.log(err.stack);
		console.log(err.name + ':' + err.message);
		
		// Retour arrière sur les modifications
		retourArriereVersion(element);
	}
	
	return retour;
}

/* Effectue le retour arrière d'une version */
var retourArriereVersion = function(element) {
	console.log('Mods.versions.retourArriereVersion ' + element.name);

	// Classes
	if(element.classes && element.classes.length > 0) {
		_.each(element.classes, function(element, index, list) {
			Mods.classes.delByCode(element.code);
    	});
	}
	
	// Domaines
	if(element.domains && element.domains.length > 0) {
		_.each(element.domains, function(element, index, list) {
			Mods.domains.delByCode(element.code);
    	});
	}
	
	// Chapitres
	if(element.chapters && element.chapters.length > 0) {
		_.each(element.chapters, function(element, index, list) {
			Mods.chapters.delByCode(element.code);
    	});
	}
}

/* Module versions */
var versions = {
	evaluate() {
		var versionsOK = true;
		console.log('Mods.versions.evaluate');
		// parcours des versions
		_.each(data, function(element, index, list) {
    		if(versionsOK && !isVersionAppliquee(element.name)) {
    			versionsOK = appliquerVersion(element);
    		}
    	});
	},
	add : addVersion,
	del() { throw new Error("Not Implemented !"); },
	delByCode() { throw new Error("Not Implemented !"); }
};

// Export du module versions
Mods.versions = versions;