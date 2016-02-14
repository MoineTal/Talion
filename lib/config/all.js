/** Retourne le texte du genre demand�*/
getGenreText = function (genre, object) {
	var retour = "";
	if(genre == 'ms') {
		retour = object.ms;
	} else if(genre == 'fs') {
		retour = object.fs;
	} else if(genre == 'mp') {
		retour = object.mp;
	} else if(genre == 'fp') {
		retour = object.fp;
	}
	
	return retour;
}

/** retourne la liste des �l�ments modifi�s sous forme textuelle */
getModCaracsMessage = function (caracs, html) {
	var retour = "";
	if(caracs.vitesse != 0) {
		retour += caracs.vitesse +" VIT"
	}
	if(caracs.esquive != 0) {
		retour += retour.length > 0 ? ", " + caracs.esquive +" ESQ" : caracs.esquive +" ESQ"; 
	}
	if(caracs.precision != 0) {
		retour += retour.length > 0 ? ", " + caracs.precision +" PRE" : caracs.precision +" PRE"; 
	}
	if(caracs.puissance != 0) {
		retour += retour.length > 0 ? ", " + caracs.puissance +" PUI" : caracs.puissance +" PUI"; 
	}
	if(caracs.volonte != 0) {
		retour += retour.length > 0 ? ", " + caracs.volonte +" VOL" : caracs.volonte +" VOL"; 
	}
	if(caracs.armure != 0) {
		retour += retour.length > 0 ? ", " + caracs.armure +" ARM" : caracs.armure +" ARM"; 
	}
	if(caracs.vie != 0) {
		retour += retour.length > 0 ? ", " + caracs.vie +" VIE" : caracs.vie +" VIE"; 
	}
	if(caracs.souffle != 0) {
		retour += retour.length > 0 ? ", " + caracs.souffle +" SOU" : caracs.souffle +" SOU"; 
	}
	if(caracs.moral != 0) {
		retour += retour.length > 0 ? ", " + caracs.moral +" MOR" : caracs.moral +" MOR"; 
	}
	
	return  retour;
}

/** retourne la liste des �l�ments modifi�s sous forme textuelle */
getModAttributesMessage = function (attributes, sup0, html) {
	var retour = "";
	if(attributes.rap != 0 && (!sup0 || attributes.rap > 0)) {
		retour += attributes.rap + " RAP";
	}
	if(attributes.per != 0 && (!sup0 || attributes.per > 0)) {
		retour += retour.length > 0 ? ", " + attributes.per +" PER" : attributes.per +" PER"; 
	}
	if(attributes.dex != 0 && (!sup0 || attributes.dex > 0)) {
		retour += retour.length > 0 ? ", " + attributes.dex +" DEX" : attributes.dex +" DEX"; 
	}
	if(attributes.for != 0 && (!sup0 || attributes.for > 0)) {
		retour += retour.length > 0 ? ", " + attributes.for +" FOR" : attributes.for +" FOR"; 
	}
	if(attributes.res != 0 && (!sup0 || attributes.res > 0)) {
		retour += retour.length > 0 ? ", " + attributes.res +" RES" : attributes.res +" RES"; 
	}
	if(attributes.men != 0 && (!sup0 || attributes.men > 0)) {
		retour += retour.length > 0 ? ", " + attributes.men +" MEN" : attributes.men +" MEN"; 
	}
	
	return  retour;
}

getTextBonusMalus = function(equ, mat, qual, adj) {
	var retour = '';
	var bonusMalus = [];
	
	bonusMalus = bonusMalus.concat(getSpecificTextBonusMalus(equ.mod, mat.qual*qual.qual));
	bonusMalus = bonusMalus.concat(getSpecificTextBonusMalus(equ.mat, mat.qual*qual.qual));
	bonusMalus = bonusMalus.concat(getSpecificTextBonusMalus(equ.adj, adj.qual*qual.qual));
	
	for (i=0; i<bonusMalus.length; i++) {
		if(retour.length > 0 ) {
			retour += ', ';
		}
		retour += bonusMalus[i];
	}
	
	return '(' + retour + ')';
}

getSpecificTextBonusMalus = function(specific, qual) {
	var retour = [];

	// Calcul des multiplicateurs en fonction des bonus/malus pr�sents
	var coeffBonus1 = (specific.bonus2 != null) ? 2 : 3; 
	var coeffBonus2 = 1; 
	var coeffMalus1 = (specific.malus2 != null) ? 1 : 1.5; 
	var coeffMalus2 = 0.5; 
		
	// Si des malus sont pr�sent, on augmente d'autant le bonus
	if(specific.malus != null) {
		coeffBonus1 += coeffMalus1;
	}
	if(specific.malus2 != null) {
		coeffBonus1 += coeffMalus2;
	}
	
	if (specific.bonus != null) {
		retour.push( Math.round(qual*coeffBonus1/2)  + ' ' + specific.bonus);
	}
	if (specific.bonus2 != null) {
		retour.push( Math.round(qual*coeffBonus2/2) + ' ' + specific.bonus2);
	}
	if (specific.malus != null) {
		retour.push( Math.round(-qual*coeffMalus1/2) + ' ' + specific.malus);
	}
	if (specific.malus2 != null) {
		retour.push( Math.round(-qual*coeffMalus2/2) + ' ' + specific.malus2);
	}
	
	return retour;
}
