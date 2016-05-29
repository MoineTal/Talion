// PRIVATE
var getPerkAll = function() {
	return dalPerks.getAll();
}

var getPerk = function(idPerk) {
	return dalPerks.get(idPerk);
}

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

		console.log('rap=' + attrPrerequis.rap+ 
				';per=' + attrPrerequis.per+ 
				';dex=' + attrPrerequis.dex+ 
				';for=' + attrPrerequis.for+ 
				';res=' + attrPrerequis.res+ 
				';men=' +attrPrerequis.men)
		bllUtil.addPrerequis(prerequis, 'RAP', attrPrerequis.rap);				
		bllUtil.addPrerequis(prerequis, 'PER', attrPrerequis.per);				
		bllUtil.addPrerequis(prerequis, 'DEX', attrPrerequis.dex);				
		bllUtil.addPrerequis(prerequis, 'FOR', attrPrerequis.for);				
		bllUtil.addPrerequis(prerequis, 'RES', attrPrerequis.res);				
		bllUtil.addPrerequis(prerequis, 'MEN', attrPrerequis.men);				
	}
	
	console.log('prerequis='+prerequis);
	return (prerequis.length > 0) ? prerequis : null;
}

var addPerk = function(userId, name, desc, idClasse, attributes, fightMisc, effects, prerequis) {
	var prerequis = calculerPrerequis(attributes, fightMisc, effects, prerequis);
	return dalPerks.add(userId, name, desc, idClasse, prerequis, attributes, fightMisc, effects, prerequis);
}

var delPerk = function(idPerk) {
	dalPerks.del(idPerk);
}

var delByCode = function(code) {
	check(code, String);
	Perks.remove({ code : code });
}

var updPerkName = function(idPerk, name) {
	dalPerks.updName(idPerk, name);
}

// PUBLIC
bllPerks = {
		getAll : getPerkAll,
		get : getPerk,
		add : addPerk,
		del : delPerk,
		delByCode : delByCode,
		updName : updPerkName		
}