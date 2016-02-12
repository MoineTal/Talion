// PRIVATE
var getEquipmentAll = function() {
	return dalEquipments.getAll();
}

var getEquipment = function(idEquipment) {
	check(idEquipment, String);
	return dalEquipments.get(idEquipment);
}

var generateLocMatQualAdj = function() {
	
	var retour = {
		loc : 0,	
		mod : 0,	
		mat : 0,	
		qual : 0,	
		adj : 0	
	};

	//console.log("Cr�ation d'un �quipement en cours...");
	// definition de la localisation;
	retour.loc = config.equipments.LOCALISATIONS[Math.floor((Math.random() * config.equipments.LOCALISATIONS.length))];
	//console.log(loc.name);
	
	// definition du mod�le;
	retour.mod = retour.loc.mods[Math.floor((Math.random() * retour.loc.mods.length))];
	//console.log(mod.name);
	
	//var mat = config.equipments.MATIERES[Math.random() * config.equipments.MATIERES.length];
	// definition de la matiere, au sein des config.equipments.MATIERES autoris�es du modele;
	retour.mat = config.equipments.MATIERES[retour.mod.mat[Math.floor(Math.random() * retour.mod.mat.length)]];
	//console.log(mat.name);
	
	// definition de la qualit�;
	retour.qual = config.equipments.QUALITES[Math.floor((Math.random() * config.equipments.QUALITES.length))];
	//console.log(qual.name);
	
	// definition de l'adjectif;
	retour.adj = config.equipments.ADJECTIFS[Math.floor((Math.random() * config.equipments.ADJECTIFS.length))];
	//console.log(adj.ms);
	
	return retour;
	
}
/** genere les equipements de base*/
var generateEquipments = function (userId, nombre, classe) {
	var i = 0;
	
	var equipements = [];
	
	while(i < nombre) {
		
		// generation d'un equipement avec les �l�ments calcul�s
		equipements.push(generateEquipment(null, classe));
		
		// equipement suivant
		i++;
	}	
}


///** met � jour les �quipements */
//updateEquipments = function(equipments) {
//	// recuperation des equipements existants
//	//var equipments = [];
//	// mise � jour avec les dernieres valeurs parametrees
//	for(var i=0; i < equipments.length; i++) {
//		var equ = equipments[i];
//		
//		var loc = config.equipments.LOCALISATIONS[equ.loc];
//		var mod = loc.mods[equ.mod.id];
//		var mat = config.equipments.MATIERES[equ.mat.id];
//		var qual = config.equipments.QUALITES[equ.qual];
//		var adj = config.equipments.ADJECTIFS[equ.adj.id];
//		
//		generateEquipment(null, loc, mod, mat, qual, adj);		
//	}		
//}

/** met � jour les caracteristiques avec la caracteristique trouv�e et sa valeur */
var majCaracs = function (caracs, carac, valCarac) {
	//var coeffGauge = config.equipments.COEFF_GAUGE;
	if(carac != null) {
		//console.log(carac);
		if(carac == 'VIT') {
			caracs.vitesse += valCarac;
		} else if (carac == 'ESQ') {
			caracs.esquive += valCarac;
		} else if (carac == 'PRE') {
			caracs.precision += valCarac;
		} else if (carac == 'PUI') {
			caracs.puissance += valCarac;
		} else if (carac == 'VOL') {
			caracs.volonte += valCarac;
		} else if (carac == 'ARM') {
			caracs.armure += valCarac;
		} else if (carac == 'VIE') {
			caracs.vie += valCarac;// * coeffGauge;
		} else if (carac == 'SOU') {
			caracs.souffle+= valCarac;// * coeffGauge;
		} else if (carac == 'MOR') {
			caracs.moral += valCarac;// * coeffGauge;		
		}
	}
}

/** calcule les pr�-requis d'attributs en fonction de la caracteristique en cours */
var calculateAttributesPrerequis = function (attributes, carac, valCarac) {
	
	var mod = config.equipments.BASE_PREREQUIS + Math.round(valCarac * config.equipments.MULT_PREREQUIS);
	
	if(valCarac != 0) {
		if(carac == 'VIT') {
			bllUtil.majAttributes(attributes, 'RAP',mod);
		} else if (carac == 'ESQ') {
			bllUtil.majAttributes(attributes, 'PER',mod);
		} else if (carac == 'PRE') {
			bllUtil.majAttributes(attributes, 'DEX',mod);
		} else if (carac == 'PUI') {
			bllUtil.majAttributes(attributes, 'FOR',mod);
		} else if (carac == 'VOL') {
			bllUtil.majAttributes(attributes, 'MEN',mod);
		} else if (carac == 'ARM') {
			bllUtil.majAttributes(attributes, 'FOR',mod);
		} else if (carac == 'VIE') {
			//mod = config.equipments.BASE_PREREQUIS + Math.round(Math.sqrt(valCarac * config.equipments.MULT_PREREQUIS / config.equipments.COEFF_GAUGE));
			bllUtil.majAttributes(attributes, 'RES',mod);
		} else if (carac == 'SOU') {
			//mod = config.equipments.BASE_PREREQUIS + Math.round(Math.sqrt(valCarac * config.equipments.MULT_PREREQUIS / config.equipments.COEFF_GAUGE));
			bllUtil.majAttributes(attributes, 'RES',mod);			
		} else if (carac == 'MOR') {
			//mod = config.equipments.BASE_PREREQUIS + Math.round(Math.sqrt(valCarac * config.equipments.MULT_PREREQUIS / config.equipments.COEFF_GAUGE));
			bllUtil.majAttributes(attributes, 'MEN',mod);
		}
	}
}

var generateEquipment = function(equ, idClasse) {
	var accepted;
		
	do {		

		var locModMatQualAdj = generateLocMatQualAdj();
		var loc = locModMatQualAdj.loc;
		var mod = locModMatQualAdj.mod;
		var mat = locModMatQualAdj.mat;
		var qual = locModMatQualAdj.qual;
		var adj = locModMatQualAdj.adj;
	
		accepted = true;
		var equipement = null;
		
		if(equ != null) {
			equipement = equ;
			// reinitialisation des bonii/malii
			equipement.mat.bonus = null;
			equipement.mat.bonus2 = null;
			equipement.mat.malus = null;
			equipement.mat.malus2 = null;
			equipement.adj.bonus = null;
			equipement.adj.bonus2 = null;
			equipement.adj.malus = null;
			equipement.adj.malus2 = null;
			equipement.mod.bonus = null;
			equipement.mod.bonus2 = null;
			equipement.mod.malus = null;
			equipement.mod.malus2 = null;
		} else {
		// Definition de l'equipement
			equipement = {
				// qualit�
				qual : qual.id,
				// localisation de l'equipement.
				loc : loc.id,
				// Modele de l'equipement au sein de la loc.
				mod : {
					id : mod.id,
					bonus : null,
					bonus2 : null,
					malus : null,
					malus2 : null		
				},
				// mati�re
				mat : {
					id : mat.id,
					bonus : null,
					bonus2 : null,
					malus : null,
					malus2 : null
				},
				// adjectif
				adj : {
					id : adj.id,
					bonus : null,
					bonus2 : null
				}
			}
		};
		
		// Si le modele d�finit un bonus, il remplace le bonus de matiere
		if(mod.bonus != undefined && mod.bonus != null) {
			equipement.mod.bonus = mod.bonus[Math.floor((Math.random() * mod.bonus.length))];
		} else if(mat.bonus != undefined && mat.bonus != null) {
			equipement.mat.bonus = mat.bonus[Math.floor((Math.random() * mat.bonus.length))];
		} else {
			equipement.mat.bonus = config.equipments.DEF_CARACS[Math.floor((Math.random() * config.equipments.DEF_CARACS.length))];
		}
	
		// mod mat bonus 2
		if(mod.bonus2 != undefined && mod.bonus2 != null) {
			equipement.mod.bonus2 = mod.bonus2[Math.floor((Math.random() * mod.bonus2.length))];
		} else if(mat.bonus2 != undefined && mat.bonus2 != null) {
			equipement.mat.bonus2 = mat.bonus2[Math.floor((Math.random() * mat.bonus2.length))];
		}
	
		// mod mat malus
		if(mod.malus != undefined && mod.malus != null) {
			equipement.mod.malus = mod.malus[Math.floor((Math.random() * mod.malus.length))];
		} else if(mat.malus != undefined && mat.malus != null) {
			equipement.mat.malus = mat.malus[Math.floor((Math.random() * mat.malus.length))];
		} else {
			equipement.mat.malus = config.equipments.DEF_CARACS[Math.floor((Math.random() * config.equipments.DEF_CARACS.length))];
		}
	
		// mod mat malus 2
		if(mod.malus2 != undefined && mod.malus2 != null) {
			equipement.mod.malus2 = mod.malus2[Math.floor((Math.random() * mod.malus2.length))];
		} else if(mat.malus2 != undefined && mat.malus2 != null) {
			equipement.mat.malus2 = mat.malus2[Math.floor((Math.random() * mat.malus2.length))];
		}
		 
		// Calcul des bonus des config.equipments.ADJECTIFS (pas de malus)
		if(adj.bonus != undefined && adj.bonus != null) {
			equipement.adj.bonus = adj.bonus[Math.floor((Math.random() * adj.bonus.length))];
		} else {
			equipement.adj.bonus = config.equipments.DEF_CARACS[Math.floor((Math.random() * config.equipments.DEF_CARACS.length))];
		}	
		
		// adj bonus 2
		if(adj.bonus2 != undefined && adj.bonus2 != null) {
			equipement.adj.bonus2 = adj.bonus2[Math.floor((Math.random() * adj.bonus2.length))];
		}
	
		var caracs = {
				vitesse : 0,
				esquive : 0,
				precision : 0,
				puissance : 0,
				volonte : 0,
				armure : 0,
				vie : 0,
				souffle : 0,
				moral : 0
		};
		calculerCaracs(caracs, equipement);
		
		// calcul des attributs
		var attributes = {
				'rap' : 0,
				'per' : 0,
				'dex' : 0,
				'for' : 0,
				'res' : 0,
				'men' : 0			
		};
		
		calculateAttributesPrerequis(attributes, 'VIT', caracs.vitesse);
		calculateAttributesPrerequis(attributes, 'ESQ', caracs.esquive);
		calculateAttributesPrerequis(attributes, 'PRE', caracs.precision);
		calculateAttributesPrerequis(attributes, 'PUI', caracs.puissance);
		calculateAttributesPrerequis(attributes, 'VOL', caracs.volonte);
		calculateAttributesPrerequis(attributes, 'ARM', caracs.armure);
		calculateAttributesPrerequis(attributes, 'VIE', caracs.vie);
		calculateAttributesPrerequis(attributes, 'SOU', caracs.souffle);
		calculateAttributesPrerequis(attributes, 'MOR', caracs.moral);
	
		var classe = { _id : null, name : 'BASE' };
		if(idClasse) {
			var maxAttribute = 'RAP';
			var maxVal = attributes.rap;
			if(attributes.per >maxVal) {
				 maxAttribute = 'PER';
				 maxVal = attributes.per;
			}
			if(attributes.dex >maxVal) {
				 maxAttribute = 'DEX';
				 maxVal = attributes.dex;
			}
			if(attributes.for >maxVal) {
				 maxAttribute = 'FOR';
				 maxVal = attributes.for;
			}
			if(attributes.res >maxVal) {
				 maxAttribute = 'RES';
				 maxVal = attributes.res;
			}
			if(attributes.men >maxVal) {
				 maxAttribute = 'MEN';
				 maxVal = attributes.men;
			}
			
			classe = bllClasses.get(idClasse);
			accepted = _.contains(classe.attributes, maxAttribute);
		}
		
		// on ne créé l'équipement que s'il correspond à la classe en cours
		if(accepted) {			
			var prerequis = [];
			bllUtil.addPrerequis(prerequis, 'RAP', attributes.rap);
			bllUtil.addPrerequis(prerequis, 'PER', attributes.per);		
			bllUtil.addPrerequis(prerequis, 'DEX', attributes.dex);		
			bllUtil.addPrerequis(prerequis, 'FOR', attributes.for);		
			bllUtil.addPrerequis(prerequis, 'RES', attributes.res);	
			bllUtil.addPrerequis(prerequis, 'MEN', attributes.men);		
		
			//console.log("Création de l'équipement [" + loc.name + "] " + mod.name + " " + getGenreText(mod.genre, adj) + " " + mat.adj + " " + qual.name + "(" + getModCaracsMessage(caracs) + ")" + " prerequis=(" + getModAttributesMessage(attributes, true) + ")");
			dalEquipments.add(null, mod.name + " " + getGenreText(mod.genre, adj) + " " + mat.adj + " " + qual.name, 'TODO', loc.id, mod.id, mat.id, qual.id, adj.id, classe._id, classe.name, prerequis, caracs, []);
		}
	} while(!accepted);	
	return equipement;
}

function calculerCaracs(caracs, equ) {
	try {
		//console.log(config.equipments.MATIERES[equ.mat.id].qual + "-" + config.equipments.QUALITES[equ.qual].qual + "-" + config.equipments.ADJECTIFS[equ.adj.id].qual);
		majCaracs(caracs, equ.mod.bonus, ((equ.mod.bonus2 != null) ? 2 : 3) * config.equipments.MATIERES[equ.mat.id].qual*config.equipments.QUALITES[equ.qual].qual);
		majCaracs(caracs, equ.mod.bonus2, (config.equipments.MATIERES[equ.mat.id].qual*config.equipments.QUALITES[equ.qual].qual));
		majCaracs(caracs, equ.mod.malus, -((equ.mod.malus2 != null) ? 0.5 : 1) * config.equipments.MATIERES[equ.mat.id].qual*config.equipments.QUALITES[equ.qual].qual);
		majCaracs(caracs, equ.mod.malus2, -(config.equipments.MATIERES[equ.mat.id].qual*config.equipments.QUALITES[equ.qual].qual));
		majCaracs(caracs, equ.mat.bonus, ((equ.mat.bonus2 != null) ? 2 : 3) * config.equipments.MATIERES[equ.mat.id].qual*config.equipments.QUALITES[equ.qual].qual);
		majCaracs(caracs, equ.mat.bonus2, (config.equipments.MATIERES[equ.mat.id].qual*config.equipments.QUALITES[equ.qual].qual));
		majCaracs(caracs, equ.mat.malus, -((equ.mat.bonus2 != null) ? 0.5 : 1) * config.equipments.MATIERES[equ.mat.id].qual*config.equipments.QUALITES[equ.qual].qual);
		majCaracs(caracs, equ.mat.malus2, -(config.equipments.MATIERES[equ.mat.id].qual*config.equipments.QUALITES[equ.qual].qual));
		majCaracs(caracs, equ.adj.bonus, ((equ.adj.bonus2 != null) ? 2 : 3) * config.equipments.ADJECTIFS[equ.adj.id].qual*config.equipments.QUALITES[equ.qual].qual);
		majCaracs(caracs, equ.adj.bonus2, (config.equipments.ADJECTIFS[equ.adj.id].qual*config.equipments.QUALITES[equ.qual].qual));
		majCaracs(caracs, equ.adj.malus, -((equ.adj.bonus2 != null) ? 0.5 : 1) * config.equipments.ADJECTIFS[equ.adj.id].qual*config.equipments.QUALITES[equ.qual].qual);
		majCaracs(caracs, equ.adj.malus2, -(config.equipments.ADJECTIFS[equ.adj.id].qual*config.equipments.QUALITES[equ.qual].qual));
		
		// on arrondi les caracteristiques g�n�r�es.
		caracs.vitesse = Math.round(caracs.vitesse);
		caracs.esquive = Math.round(caracs.esquive);
		caracs.precision = Math.round(caracs.precision);
		caracs.puissance = Math.round(caracs.puissance);
		caracs.volonte = Math.round(caracs.volonte);
		caracs.armure = Math.round(caracs.armure);
		caracs.vie = Math.round(caracs.vie);
		caracs.souffle = Math.round(caracs.souffle);
		caracs.moral = Math.round(caracs.moral);
	} catch (e) {
		console.log(e);		
	}
	//console.log(caracs);
}

var addEquipment = function(userId, name, desc, loc, mod, mat, qual, adj, idClasse, prerequis, caracs, effects) {
	//check(userId, Meteor.users);
	check(name, String);
	check(desc, String);
	check(loc, Number);
	check(mod, Number);
	check(mat, Number);
	check(qual, Number);
	check(adj, Number);
	//check(idClasse, String);
	//check(prerequis, [Schema.Operation]);
	check(caracs, Schema.Caracteristics);
	//check(effects, [Schema.Operation]);
	return dalEquipments.add(userId, name, desc, loc, mod, mat, qual, adj, idClasse, prerequis, caracs, effects);
}

var delEquipment = function(idEquipment) {
	check(idEquipment, String);
	dalEquipments.del(idEquipment);
}

var updEquipmentName = function(idEquipment, name) {
	check(idEquipment, String);
	check(name, String);
	dalEquipments.updName(idEquipment, name);
}

// PUBLIC
bllEquipments = {
		getAll : getEquipmentAll,
		get : getEquipment,
		add : addEquipment,
		del : delEquipment,
		generate : generateEquipments,
		updName : updEquipmentName		
}