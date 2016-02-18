/** met � jour les attributs avec l'attribut trouv�e et un calcul � partir de la valeur de la caracteristique li�e */
var majAttributes = function (attributes, type, val) {

	if(val > 0) {
		if(type == 'RAP') {
			attributes.rap += val;
		} else if (type == 'PER') {
			attributes.per += val;
		} else if (type == 'DEX') {
			attributes.dex += val;
		} else if (type == 'FOR') {
			attributes.for += val;
		} else if (type == 'RES') {
			attributes.res += val;
		} else if (type == 'MEN') {
			attributes.men += val;
		} else if (type == 'FOC') {
			attributes.per += val;
			attributes.dex += val;
		} else if (type == 'DAN') {
			attributes.res += val;
			attributes.for += val;
		} else if (type == 'SUR') {
			attributes.men += val;
			attributes.res += val;
		} else if (type == 'LET') {
			attributes.rap += val;
			attributes.for += val;
		}		
	}
}
//ajoute un prérequis
var addPrerequis = function(array, name, val) {
	if(val > 0) {
		var op = {
				op1 : {
					what : name,
					who : 'ME'
				},
				op1val : 0,
				op : 'SUP',
				op2 : null,
				op2val : val					
		};
		array.push(op);
	}
}

var addEffects = function(array, op1, val) {
	if(val != 0) {	
		var op = (val >= 0) ? 'ADD' : 'REM';
		var effect = 
		{
			op1 : op1,
			op1val : 0,
			op : op,
			op2 : null,
			op2val : (val >= 0) ? val : -val			
		};
		array.push(effect);
		
//		// Prérequis uniquement dans le cas d'une valeur positive
//		if(prerequis && op1 && op1.what && val > 0) {
//			thisPrerequis = {};
//			switch(op1.what) {
//			case 'FOC' : addPrerequis(prerequis, 'PER', val); break;
//			case 'DAN' : addPrerequis(prerequis, 'RES', val); break;
//			case 'KLL' : addPrerequis(prerequis, 'FOR', val); break;
//			}
//			array.push(thisPrerequis);			
//		}
	}
}

//PUBLIC
bllUtil = {
		majAttributes : majAttributes,
		addPrerequis : addPrerequis,	
		addEffects : addEffects	
}