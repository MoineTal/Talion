var matId = 0;
var qualId = 0;
var adjId = 0;
var locId = 0;
var piedsId = 0;
var jambesId = 0;
var torseId = 0;
var brasId = 0;
var mainsId = 0;
var teteId = 0;

config.equipments = {
		COEFF_GAUGE : 4,
		BASE_PREREQUIS : 5,
		MULT_PREREQUIS : 0.3,
		MATIERES : [
		        	{ id:matId++, name : 'Lin', adj:'en lin', qual:2, bonus:['VIT', 'ESQ', 'PRE'], bonus2:['VIT', 'ESQ', 'PRE', 'SOU'], malus:['VOL', 'PUI', 'ARM', 'VIE', 'MOR'] }, // 0
		        	{ id:matId++, name : 'Cuir souple', adj:'de cuir souple', qual:3, bonus:['VIT', 'ESQ', 'PRE', 'SOU', 'MOR'], bonus2:['VIT', 'ESQ', 'PRE', 'SOU', 'MOR', 'ARM'], malus:['VOL', 'PUI', 'ARM', 'VIE'] }, //1
		        	{ id:matId++, name : 'Cuir bouilli', adj:'de cuir bouilli', qual:3.5, bonus:['VIT', 'ESQ', 'PRE', 'SOU', 'MOR'], bonus2:['ARM', 'VIE'], malus:['VOL', 'PUI', 'SOU', 'VIE'] }, //2
		        	{ id:matId++, name : 'Cuir clouté', adj:'de cuir clouté', qual:4, bonus:['ARM', 'VIE'], bonus2:['PUI', 'VOL', 'VIE', 'MOR'], malus:['VIT', 'ESQ', 'PRE', 'SOU'] }, //3
		        	{ id:matId++, name : 'Bambou', adj:'en bambou', qual:4.5, bonus:['VIE'], bonus2:['ARM', 'MOR'], malus:['ESQ', 'PRE', 'PUI', 'VOL', 'SOU', 'VIE'] }, //4
		        	{ id:matId++, name : 'Bois', adj:'en bois', qual:4.5, bonus:['VIE'], bonus2:['ARM', 'MOR'], malus:['ESQ', 'PRE', 'PUI', 'VOL', 'SOU', 'VIE'] }, //5
		        	{ id:matId++, name : 'Ecailles de Bois', adj:'en écailles de bois', qual:5, bonus:['VIT', 'ESQ', 'PRE'], bonus2:['ARM', 'VIE'], malus:['PUI', 'VOL', 'MOR', 'SOU'] }, //6
		        	{ id:matId++, name : 'Cuivre', adj:'en cuivre', qual:5.5, bonus:['ARM', 'VIE'], bonus2:['PUI', 'VOL', 'VIE', 'MOR'], malus:['VIT', 'ESQ', 'PRE', 'SOU'] }, //7
		        	{ id:matId++, name : 'Bronze', adj:'en bronze', qual:6, bonus:['ARM', 'VIE'], bonus2:['PUI', 'VOL', 'VIE', 'MOR'], malus:['VIT', 'ESQ', 'PRE', 'SOU'] }, //8
		        	{ id:matId++, name : 'Ecailles de Fer', adj:'en écailles de fer', qual:6.5, bonus:['VIT', 'ESQ', 'PRE', 'SOU'], bonus2:['ARM', 'VIE'], malus:['PUI', 'VOL', 'VIE', 'MOR'] }, //9
		        	{ id:matId++, name : 'Fer', adj:'en fer', qual:7, bonus:['ARM', 'VIE'], bonus2:['PUI', 'VOL', 'VIE', 'MOR'], malus:['VIT', 'ESQ', 'PRE', 'SOU'] }, //10
		        	{ id:matId++, name : 'maille d\'acier', adj:'de maille', qual:7.5, bonus:['VIT', 'ESQ', 'PRE', 'SOU'], bonus2:['ARM', 'VIE'], malus:['PUI', 'VOL', 'VIE', 'MOR'] }, //11
		        	{ id:matId++, name : 'Acier', adj:'en acier', qual:8, bonus:['ARM', 'VIE'], bonus2:['ARM', 'PUI', 'VOL', 'VIE', 'MOR'], malus:['VIT', 'ESQ', 'PRE', 'SOU'] }, //12
		        	{ id:matId++, name : 'Mithril', adj:'en mithril', qual:10, bonus2:['ARM', 'VIE'],  }
		        	],
    	QUALITES : [
                    { id:qualId++, name : 'usé', qual:2 }, //0 
                    { id:qualId++, name : 'commun', qual:3 }, //1
                    { id:qualId++, name : 'simple', qual:4 }, //2
                    { id:qualId++, name : 'de qualité', qual:5 }, //3
                    { id:qualId++, name : 'de maître', qual:6 }, //4
                    { id:qualId++, name : 'rare', qual:7 }, //5
                    { id:qualId++, name : 'magique', qual:8 }, //6
                    { id:qualId++, name : 'légendaire', qual:10 } //7
                    ],
		ADJECTIFS : [
		             { id:adjId++, ms : 'fin', fs : 'fine', mp : 'fins', fp : 'fines', qual:2, bonus:['PRE'] }, //1
		             { id:adjId++, ms : 'léger', fs : 'légère', mp : 'légers', fp : 'légères', qual:2, bonus:['VIT'] }, //1
		             { id:adjId++, ms : 'bleu', fs : 'bleue', mp : 'bleus', fp : 'bleues', qual:2, bonus:['ESQ', 'VIT', 'SOU'] }, //1
		             { id:adjId++, ms : 'vert', fs : 'verte', mp : 'verts', fp : 'vertes', qual:2, bonus:['PRE', 'VIE', 'MOR'] }, //1
		             { id:adjId++, ms : 'rouge', fs : 'rouge', mp : 'rouges', fp : 'rouges', qual:2, bonus:['PUI', 'MOR'] }, //1
		             { id:adjId++, ms : 'blanc', fs : 'blanche', mp : 'blancs', fp : 'blanches', qual:2, bonus:['PRE', 'VIE'] }, //1
		             { id:adjId++, ms : 'noir', fs : 'noire', mp : 'noirs', fp : 'noires', qual:2, bonus:['VOL', 'MOR', 'SOU'] }, //1
		             { id:adjId++, ms : 'orange', fs : 'orange', mp : 'oranges', fp : 'oranges', qual:2, bonus:['VOL', 'VIE', 'SOU'] }, //1
		             { id:adjId++, ms : 'violet', fs : 'violette', mp : 'violets', fp : 'violettes', qual:2, bonus:['PRE', 'MOR', 'VIE'] }, //1
		             { id:adjId++, ms : 'sombre', fs : 'sombre', mp : 'sombres', fp : 'sombres', qual:3, bonus:['PUI', 'VOL', 'VIE', 'MOR', 'SOU'] }, //1
		             { id:adjId++, ms : 'leste', fs : 'leste', mp : 'lestes', fp : 'lestes', qual:2, bonus:['PRE'] }, //1
		             { id:adjId++, ms : 'de voleur', fs : 'de voleur', mp : 'de voleur', fp : 'de voleur', qual:3, bonus:['ESQ', 'VIT', 'PRE'] }, //1
		             { id:adjId++, ms : 'de brigand', fs : 'de brigand', mp : 'de brigand', fp : 'de brigand', qual:3, bonus:['VIT', 'PRE', 'PUI'] }, //1
		             { id:adjId++, ms : 'lourd', fs : 'lourde', mp : 'lourds', fp : 'lourdes', qual:4, bonus:['PUI', 'ARM', 'VIE', 'MOR'] }, //2
		             { id:adjId++, ms : 'lumineux', fs : 'lumineuse', mp : 'lumineux', fp : 'lumineuses', qual:4, bonus:['VIT', 'ESQ', 'PRE', 'VIE', 'SOU'] }, //2
		             { id:adjId++, ms : 'illuminé', fs : 'illuminée', mp : 'illuminés', fp : 'illuminées', qual:4, bonus:['VIT', 'ESQ', 'PRE', 'VIE', 'SOU'] }, //2
		             { id:adjId++, ms : 'bénéfique', fs : 'bénéfique', mp : 'bénéfiques', fp : 'bénéfiques', qual:4, bonus:['VIE'] }, //2
		             { id:adjId++, ms : 'équilibré', fs : 'équilibrée', mp : 'équilibrés', fp : 'équilibrées', qual:3, bonus:['PRE'] }, //2
		             { id:adjId++, ms : 'brutal', fs : 'brutale', mp : 'brutaux', fp : 'brutales', qual:4, bonus:['PUI'] }, //2
		             { id:adjId++, ms : 'obscur', fs : 'obscure', mp : 'obscurs', fp : 'obscures', qual:3, bonus:['PRE', 'PUI', 'VOL', 'VIE', 'MOR', 'SOU'] }, //2
		             { id:adjId++, ms : 'sanglant', fs : 'sanglante', mp : 'sanglants', fp : 'sanglantes', qual:5, bonus:['PUI'] }, //2
		             { id:adjId++, ms : 'malfaisant', fs : 'malfaisante', mp : 'malfaisants', fp : 'malfaisantes', qual:3, bonus:['PUI', 'VOL', 'MOR'] }, //2
		             { id:adjId++, ms : 'ténébreux', fs : 'ténébreuse', mp : 'ténébreux', fp : 'ténébreuses', qual:4, bonus:['PRE', 'PUI', 'VOL', 'MOR', 'SOU'] }, //2
		             { id:adjId++, ms : 'argenté', fs : 'argentée', mp : 'argentés', fp : 'argentées', qual:4, bonus:['VIT', 'ESQ', 'PRE', 'MOR', 'SOU'] }, //2
		             { id:adjId++, ms : 'funeste', fs : 'funeste', mp : 'funestes', fp : 'funestes', qual:4, bonus:['PRE', 'PUI', 'VOL'] }, //2
		             { id:adjId++, ms : 'de bouffon', fs : 'de bouffon', mp : 'de bouffon', fp : 'de bouffon', qual:3, bonus:['VIT', 'ESQ', 'SOU'] }, //2
		             { id:adjId++, ms : 'de paladin', fs : 'de paladin', mp : 'de paladin', fp : 'de paladin', qual:4, bonus:['PRE', 'PUI', 'VOL', 'VIE', 'MOR'] }, //2
		             { id:adjId++, ms : 'de chevalier', fs : 'de chevalier', mp : 'de chevalier', fp : 'de chevalier', qual:3, bonus:['PRE', 'PUI', 'MOR'] }, //2
		             { id:adjId++, ms : 'de nécromant', fs : 'de nécromant', mp : 'de nécromant', fp : 'de nécromant', qual:4, bonus:['PUI', 'VOL', 'MOR'] }, //2
		             { id:adjId++, ms : 'de barbare', fs : 'de barbare', mp : 'de barbare', fp : 'de barbare', qual:4, bonus:['PUI', 'VOL'] }, //2
		             { id:adjId++, ms : 'de mage', fs : 'de mage', mp : 'de mage', fp : 'de mage', qual:4, bonus:['VIT', 'ESQ', 'VOL', 'MOR'] }, //2
		             { id:adjId++, ms : 'meurtrier', fs : 'meurtrière', mp : 'meurtriers', fp : 'meurtrières', qual:5, bonus:['PUI'] }, //2
		             { id:adjId++, ms : 'vandale', fs : 'vandale', mp : 'vandales', fp : 'vandales', qual:3, bonus:['PUI'] }, //2
		             { id:adjId++, ms : 'perverti', fs : 'pervertie', mp : 'pervertis', fp : 'perverties', qual:5, bonus:['VOL'] }, //2
		             { id:adjId++, ms : 'ravageur', fs : 'ravageuse', mp : 'ravageurs', fp : 'ravageuses', qual:5, bonus:['PUI'] }, //2
		             { id:adjId++, ms : 'exterminateur', fs : 'exterminatrice', mp : 'exterminateurs', fp : 'exterminatrices', qual:5, bonus:['PUI'] }, //2
		             { id:adjId++, ms : 'monstrueux', fs : 'monstrueuse', mp : 'monstrueux', fp : 'monstrueuses', qual:5, bonus:['PUI', 'VOL'] }, //2
		             { id:adjId++, ms : 'de virtuosité', fs : 'de virtuosité', mp : 'de virtuosité', fp : 'de virtuosité', qual:5, bonus:['PRE'] }, //2
		             { id:adjId++, ms : 'de finesse', fs : 'de finesse', mp : 'de finesse', fp : 'de finesse', qual:4, bonus:['PRE'] }, //2
		             { id:adjId++, ms : 'd\'agilité', fs : 'd\'agilité', mp : 'd\'agilité', fp : 'd\'agilité', qual:5, bonus:['PRE'] }, //2
		             { id:adjId++, ms : 'd\'adresse', fs : 'd\'adresse', mp : 'd\'adresse', fp : 'd\'adresse', qual:6, bonus:['PRE'] }, //2
		             { id:adjId++, ms : 'de précision', fs : 'de précision', mp : 'de précision', fp : 'de précision', qual:6, bonus:['PRE'] }, //2
		             { id:adjId++, ms : 'de devastation', fs : 'de devastation', mp : 'de devastation', fp : 'de devastation', qual:6, bonus:['PUI'] }, //2
		             { id:adjId++, ms : 'de perversion', fs : 'de perversion', mp : 'de perversion', fp : 'de perversion', qual:6, bonus:['VOL'] }, //2
		             { id:adjId++, ms : 'de destruction', fs : 'de destruction', mp : 'de destruction', fp : 'de destruction', qual:6, bonus:['PUI'] }, //2
		             { id:adjId++, ms : 'd\'illusion', fs : 'd\'illusion', mp : 'd\'illusion', fp : 'd\'illusion', qual:5, bonus:['VOL'] }, //2
		             { id:adjId++, ms : 'd\'alteration', fs : 'd\'alteration', mp : 'd\'alteration', fp : 'd\'alteration', qual:4, bonus:['PRE', 'VOL'] }, //2
		             { id:adjId++, ms : 'd\'extermination', fs : 'd\'extermination', mp : 'd\'extermination', fp : 'd\'extermination', qual:6, bonus:['PUI'] }, //2
		             { id:adjId++, ms : 'de conjuration', fs : 'de conjuration', mp : 'de conjuration', fp : 'de conjuration', qual:4, bonus:['VOL'] }, //2
		             { id:adjId++, ms : 'elfique', fs : 'elfique', mp : 'elfiques', fp : 'elfiques', qual:5, bonus:['VIT', 'ESQ'] }, //2
		             { id:adjId++, ms : 'nanique', fs : 'nanique', mp : 'naniques', fp : 'naniques', qual:5, bonus:['PUI', 'ARM'] }, //2
		             { id:adjId++, ms : 'enchanté', fs : 'enchantée', mp : 'enchantés', fp : 'enchantées', qual:6, bonus:['VIT', 'ESQ', 'PRE'] }, //2
		             { id:adjId++, ms : 'orc', fs : 'orc', mp : 'orcs', fp : 'orcs', qual:5, bonus:['PUI'] }, //2
		             { id:adjId++, ms : 'vivant', fs : 'vivante', mp : 'vivants', fp : 'vivantes', qual:7, bonus:['VIE'] }, //2
		             { id:adjId++, ms : 'incrusté de pierreries', fs : 'incrustée de pierreries', mp : 'incrustés de pierreries', fp : 'incrustées de pierreries', qual:4 }, //2
		             { id:adjId++, ms : 'chamanique', fs : 'chamanique', mp : 'chamaniques', fp : 'chamaniques', qual:5, bonus:['VOL'] }, //3
		             { id:adjId++, ms : 'céleste', fs : 'céleste', mp : 'célestes', fp : 'célestes', qual:6, bonus:['VIT','ESQ','PRE', 'VOL', 'VIE', 'MOR', 'SOU'] }, //3
		             { id:adjId++, ms : 'miraculeux', fs : 'miraculeuse', mp : 'miraculeux', fp : 'miraculeuses', qual:7, bonus:['VIE', 'MOR', 'SOU'] }, //3
		             { id:adjId++, ms : 'vampirique', fs : 'vampirique', mp : 'vampiriques', fp : 'vampiriques', qual:7, bonus:['VIT','ESQ','PRE', 'VOL', 'VIE', 'MOR'] }, //3
		             { id:adjId++, ms : 'implacable', fs : 'implacable', mp : 'implacables', fp : 'implacables', qual:6, bonus:['PRE', 'PUI']}, //4
		             { id:adjId++, ms : 'onirique', fs : 'onirique', mp : 'oniriques', fp : 'oniriques', qual:8 }, //3
		             { id:adjId++, ms : 'elementaire', fs : 'elementaire', mp : 'elementaires', fp : 'elementaires', qual:8 }, //3
		             { id:adjId++, ms : 'terrible', fs : 'terrible', mp : 'terribles', fp : 'terribles', qual:6, bonus:['PUI','VOL','VIE', 'MOR'] }, //3
		             { id:adjId++, ms : 'parfait', fs : 'parfaite', mp : 'parfaits', fp : 'parfaites', qual:7, bonus:['PRE']}, //4
		             { id:adjId++, ms : 'mortel', fs : 'mortelle', mp : 'mortels', fp : 'mortelles', qual:8, bonus:['PUI','VOL'] }, //3
		             { id:adjId++, ms : 'corrompu', fs : 'corrompue', mp : 'corrompus', fp : 'corrompues', qual:8, bonus:['PUI','VOL','VIE', 'MOR'] }, //3
		             { id:adjId++, ms : 'fatal', fs : 'fatale', mp : 'fatals', fp : 'fatales', qual:8, bonus:['PUI'] }, //3
		             { id:adjId++, ms : 'majeur', fs : 'majeure', mp : 'majeurs', fp : 'majeures', qual:7 }, //3
		             { id:adjId++, ms : 'chaotique', fs : 'chaotique', mp : 'chaotiques', fp : 'chaotiques', qual:9, bonus:['PUI','VOL'] }, //4
		             { id:adjId++, ms : 'diabolique', fs : 'diabolique', mp : 'diaboliques', fp : 'diaboliques', qual:9, bonus:['PUI','VOL'] }, //4
		             { id:adjId++, ms : 'démoniaque', fs : 'démoniaque', mp : 'démoniaques', fp : 'démoniaques', qual:9, bonus:['PUI','VOL'] }, //4
		             { id:adjId++, ms : 'infaillible', fs : 'infaillible', mp : 'infaillibles', fp : 'infaillibles', qual:9, bonus:['PRE'] }, //4
		             { id:adjId++, ms : 'infernal', fs : 'infernale', mp : 'infernaux', fp : 'infernales', qual:9 }, //4
		             { id:adjId++, ms : 'angélique', fs : 'angélique', mp : 'angéliques', fp : 'angéliques', qual:9 }, //4
		             { id:adjId++, ms : 'divin', fs : 'divine', mp : 'divins', fp : 'divines', qual:10 }, //4
		             { id:adjId++, ms : 'ultime', fs : 'ultime', mp : 'ultimes', fp : 'ultimes', qual:10 } //4
		             ],
     LOCALISATIONS : [
                      { id:locId++, name:'Pieds', mods: [
                                                 		{ id:piedsId++, name : 'Sabots', genre:'mp', mat:[4, 5], qual:[0, 1, 2, 3, 4, 5] },
                                                		{ id:piedsId++, name : 'Sandales', genre:'fp', mat:[0, 1, 2, 3, 4, 11, 13], qual:[0, 1, 2, 3, 4, 5, 6, 7] },
                                                		{ id:piedsId++, name : 'Chaussures', genre:'fp', mat:[0, 1, 2, 3, 4, 7, 8, 11, 13], qual:[0, 1, 2, 3, 4, 5, 6, 7] },
                                                		{ id:piedsId++, name : 'Bottes', genre:'fp', mat:[1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13], qual:[0, 1, 2, 3, 4, 5, 6, 7] },
                                                		{ id:piedsId++, name : 'Solerets', genre:'mp', mat:[6, 7, 8, 9, 10, 11, 12, 13], qual:[0, 1, 2, 3, 4, 5, 6, 7] }
                                                		]},
                      { id:locId++, name:'Jambes', mods: [
                                                          { id:jambesId++, name : 'Bandages', genre:'mp', mat:[0, 1, 2], qual:[0, 1, 2, 3, 6, 7]  },
                                                          { id:jambesId++, name : 'Chausses', genre:'fp', mat:[0, 1, 2], qual:[0, 1, 2, 3, 4, 5, 6, 7] },
                                                          { id:jambesId++, name : 'Pantalon', genre:'ms', mat:[0, 1, 2, 3, 4, 6, 11, 13], qual:[0, 1, 2, 3, 4, 5, 6, 7] },
                                                          { id:jambesId++, name : 'Grèves', genre:'fp', mat:[2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13], qual:[0, 1, 2, 3, 4, 5, 6, 7] },
                                                          { id:jambesId++, name : 'Genouillères', genre:'fp', mat:[3, 6, 7, 8, 9, 10, 12, 13], qual:[0, 1, 2, 3, 4, 5, 6, 7] },
                                                          { id:jambesId++, name : 'Cuissard', genre:'ms', mat:[1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13], qual:[0, 1, 2, 3, 4, 5, 6, 7] },
                                                          { id:jambesId++, name : 'Jambières', genre:'fp', mat:[2, 3, 6, 7, 8, 9, 10, 11, 12, 13], qual:[0, 1, 2, 3, 4, 5, 6, 7] }
                                                        ]},
                      { id:locId++, name:'Torse', mods: [
                                                         { id:torseId++, name : 'Chemise', genre:'fs', mat:[0, 1, 2, 3, 9, 11, 13], qual:[0, 1, 2, 3, 6, 7] },
                                                         { id:torseId++, name : 'Robe', genre:'fs', mat:[0, 1, 2, 3, 13], qual:[0, 1, 2, 3, 6, 7] },
                                                         { id:torseId++, name : 'Plastron', genre:'ms', mat:[6, 7, 8, 9, 10, 11, 12, 13], qual:[0, 1, 2, 3, 6, 7] },
                                                         { id:torseId++, name : 'Surcôt', genre:'ms', mat:[0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13], qual:[0, 1, 2, 3, 6, 7] },
                                                         { id:torseId++, name : 'Gilet', genre:'ms', mat:[0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13], qual:[0, 1, 2, 3, 6, 7] },
                                                         { id:torseId++, name : 'Broigne', genre:'fs', mat:[4, 5, 6, 7, 8, 9, 10, 11, 12, 13], qual:[0, 1, 2, 3, 6, 7] },
                                                         { id:torseId++, name : 'Cataphracte', genre:'ms', mat:[4, 5, 6, 7, 8, 9, 10, 11, 12, 13], qual:[0, 1, 2, 3, 6, 7] },
                                                         { id:torseId++, name : 'Jacque', genre:'fs', mat:[4, 5, 6, 7, 8, 9, 10, 11, 12, 13], qual:[0, 1, 2, 3, 6, 7] },
                                                         { id:torseId++, name : 'Gambison', genre:'ms', mat:[4, 5, 6, 7, 8, 9, 10, 11, 12, 13], qual:[0, 1, 2, 3, 6, 7] },                  
                                                         { id:torseId++, name : 'Harnois', genre:'ms', mat:[4, 5, 6, 7, 8, 9, 10, 11, 12, 13], qual:[0, 1, 2, 3, 6, 7] },                  
                                                         { id:torseId++, name : 'Cotte', genre:'fs', mat:[6, 9, 11, 13], qual:[6, 9, 11, 13] },
                                                         { id:torseId++, name : 'Haubert', genre:'ms', mat:[7, 8, 9, 10, 11, 12, 13], qual:[0, 1, 2, 3, 6, 7] },
                                                         { id:torseId++, name : 'Brigandine', genre:'fs', mat:[6, 7, 8, 9, 10, 11, 12, 13], qual:[0, 1, 2, 3, 6, 7] },
                                                         { id:torseId++, name : 'Plate', genre:'fs', mat:[7, 8, 10, 12, 13], qual:[0, 1, 2, 3, 6, 7] }
                                                         ]}, 
                      { id:locId++, name:'Bras', mods: [
                                                        { id:brasId++, name : 'Bandages', genre:'mp', mat:[0, 1, 2] },
                                                        { id:brasId++, name : 'Spalière', genre:'fs', mat:[0, 1, 2] },
                                                        { id:brasId++, name : 'Rondelle', genre:'fs', mat:[0, 1, 2] },
                                                        { id:brasId++, name : 'Cubitière', genre:'fs', mat:[0, 1, 2] },
                                                        { id:brasId++, name : 'Bracelet', genre:'ms', mat:[0, 1, 2] },
                                                        { id:brasId++, name : 'Brassard', genre:'ms', mat:[0, 1, 2] },
                                                        { id:brasId++, name : 'Epaulière', genre:'fs', mat:[0, 1, 2] },
                                                        { id:brasId++, name : 'Torsade', genre:'fs', mat:[0, 1, 2] },
                                                        { id:brasId++, name : 'Bras d\'armure', genre:'ms', mat:[0, 1, 2] },
                                                        { id:brasId++, name : 'Gantelet', genre:'ms', mat:[0, 1, 2] },
                                                        { id:brasId++, name : 'Gant', genre:'ms', mat:[0, 1, 2] }
                                                        ]}, 
                      { id:locId++, name:'Mains', mods: [
                                                         { id:mainsId++, name : 'Fléau d\'armes', genre:'ms', mat:[7, 8, 10, 12, 13], bonus:['PUI'], bonus2:['PUI', 'VIT'], malus:['VOL', 'ESQ', 'PRE', 'ARM'], malus2:['ESQ', 'PRE', 'SOU', 'ARM'] },
                                                         { id:mainsId++, name : 'Masse d\'armes', genre:'fs', mat:[5, 7, 8, 10, 12, 13], bonus:['PUI'], bonus2:['PUI', 'VOL'], malus:['VIT', 'PRE', 'SOU'], malus2:['ESQ', 'SOU'] },
                                                         { id:mainsId++, name : 'Marteau d\'armes', genre:'ms', mat:[5, 7, 8, 10, 12, 13], bonus:['VOL'], bonus2:['VOL', 'PUI'], malus:['VOL', 'PRE'], malus2:['ESQ', 'PRE'] },
                                                         { id:mainsId++, name : 'Bâton', genre:'ms', mat:[4, 5, 7, 8, 10, 12, 13], bonus:['VOL'], bonus2:['VOL', 'VIT', 'ESQ'], malus:['PUI', 'PRE', 'ARM', 'VIE'], malus2:['PUI', 'PRE', 'ARM', 'VIE'] },
                                                         { id:mainsId++, name : 'Sceptre', genre:'ms', mat:[4, 5, 7, 8, 10, 12, 13], bonus:['VOL'], bonus2:['VOL', 'PUI', 'VIT'], malus:['PRE', 'ESQ', 'ARM', 'VIE'], malus2:['ESQ', 'PRE', 'ARM', 'VIE'] },
                                                         { id:mainsId++, name : 'Morgenstern', genre:'ms', mat:[7, 8, 10, 12, 13], bonus:['PUI'], bonus2:['VIT', 'PUI'], malus:['ESQ', 'PRE', 'ARM'], malus2:['ESQ', 'PRE', 'SOU', 'ARM'] },
                                                         { id:mainsId++, name : 'Coutelas', genre:'ms', mat:[7, 8, 10, 12, 13], bonus:['VIT'], bonus2:['ESQ', 'PRE', 'SOU', 'VIT'], malus:['PUI', 'VOL'], malus2:['PUI', 'VOL'] },
                                                         { id:mainsId++, name : 'Dague', genre:'fs', mat:[7, 8, 10, 12, 13], bonus:['PRE', 'VIT'], bonus2:['ESQ', 'PUI', 'SOU', 'VIT'], malus:['PUI', 'VOL'], malus2:['PUI', 'VOL'] },
                                                         { id:mainsId++, name : 'Misericorde', genre:'fs', mat:[7, 8, 10, 12, 13], bonus:['VIT'], bonus2:['PRE', 'VIT'], malus:['PUI'], malus2:['PUI'] },
                                                         { id:mainsId++, name : 'Hache', genre:'fs', mat:[7, 8, 10, 12, 13], bonus:['PUI'], bonus2:['PUI', 'VIT', 'VOL'], malus:['ESQ', 'PRE', 'SOU', 'ARM'], malus2:['ESQ', 'PRE', 'SOU', 'ARM'] },
                                                         { id:mainsId++, name : 'Scramasaxe', genre:'ms', mat:[7, 8, 10, 12, 13], bonus:['PRE'], bonus2:['VIT'], malus:['PUI', 'ARM', 'VOL'], malus2:['PUI', 'ARM', 'VOL'] },
                                                         { id:mainsId++, name : 'Epée courte', genre:'fs', mat:[5, 7, 8, 10, 12, 13], bonus:['PRE'], bonus2:['VIT'], malus:['VOL', 'PRE'], malus2:['VOL', 'PRE'] },
                                                         { id:mainsId++, name : 'Sabre', genre:'ms', mat:[5, 7, 8, 10, 12, 13], bonus:['PRE'], bonus2:['PUI', 'VIT', 'ESQ'], malus:['PRE', 'ARM'], malus2:['PRE', 'ARM', 'VOL'] },
                                                         { id:mainsId++, name : 'Kriss', genre:'ms', mat:[5, 7, 8, 10, 12, 13], bonus:['PRE'], bonus2:['PUI', 'VIT', 'ESQ'], malus:['PRE', 'ARM'], malus2:['PRE', 'ARM', 'VOL'] },
                                                         { id:mainsId++, name : 'Cimeterre', genre:'ms', mat:[5, 7, 8, 10, 12, 13], bonus:['VIT', 'PRE'], bonus2:['PUI', 'VOL'], malus:['PUI'], malus2:['ARM', 'VOL', 'SOU'] },
                                                         { id:mainsId++, name : 'Rapière', genre:'fs', mat:[5, 7, 8, 10, 12, 13], bonus:['PRE'], bonus2:['PUI', 'VIT'], malus:['PRE', 'ESQ'], malus2:['PRE', 'ESQ', 'VOL'] },
                                                         { id:mainsId++, name : 'Epée longue', genre:'fs', mat:[5, 7, 8, 10, 12, 13], bonus:['PUI'], bonus2:['PRE', 'VOL'], malus:['VIT', 'ARM', 'ESQ'], malus2:['VIT', 'ESQ', 'ARM'] },
                                                         { id:mainsId++, name : 'Claymore', genre:'fs', mat:[7, 8, 10, 12, 13], bonus:['PUI'], bonus2:['PUI', 'VOL'], malus:['VIT', 'PRE'], malus2:['ESQ', 'PRE'] },
                                                         { id:mainsId++, name : 'Epée batarde', genre:'fs', mat:[7, 8, 10, 12, 13], bonus:['PUI'], bonus2:['PUI', 'VOL'], malus:['VIT', 'PRE'], malus2:['ESQ', 'PRE'] },
                                                         { id:mainsId++, name : 'Espadon', genre:'ms', mat:[7, 8, 10, 12, 13], bonus:['PUI'], bonus2:['VOL'], malus:['VIT', 'PRE'], malus2:['ESQ', 'PRE'] },
                                                         { id:mainsId++, name : 'Trident', genre:'ms', mat:[7, 8, 10, 12, 13], bonus:['VOL'], bonus2:['PUI'], malus:['VIT','ESQ', 'PRE'], malus2:['VIT', 'ESQ', 'PRE'] },
                                                         { id:mainsId++, name : 'Flamberge', genre:'fs', mat:[7, 8, 10, 12, 13], bonus:['PUI'], bonus2:['PUI', 'VOL'], malus:['VIT','ESQ', 'PRE'], malus2:['VIT', 'ESQ', 'PRE'] },
                                                         { id:mainsId++, name : 'Vouge', genre:'fs', mat:[4, 7, 8, 10, 12, 13], bonus:['PUI'], bonus2:['PUI'], malus:['VIT', 'PRE'], malus2:['VIT', 'PRE', 'ESQ'] },
                                                         { id:mainsId++, name : 'Pavois', genre:'ms', mat:[4, 5, 7, 8, 10, 12, 13], bonus:['ARM'], bonus2:['ARM', 'PUI', 'VOL'], malus:['VIT', 'ESQ'], malus2:['ESQ'] },
                                                         { id:mainsId++, name : 'Rondache', genre:'fs', mat:[4, 5, 7, 8, 10, 12, 13], bonus:['ARM'], bonus2:['VOL', 'ESQ'], malus:['VIT', 'PRE'], malus2:['VIT', 'PRE'] },
                                                         { id:mainsId++, name : 'Targe', genre:'fs', mat:[4, 5, 7, 8, 10, 12, 13], bonus:['ESQ', 'VIT'], bonus2:['ARM'], malus:['VOL', 'PUI'], malus2:['VOL', 'PUI'] },
                                                         { id:mainsId++, name : 'Ecu', genre:'ms', mat:[4, 5, 7, 8, 10, 12, 13], bonus:['ARM'], bonus2:['ARM', 'PUI', 'VOL'], malus:['VIT', 'PRE'], malus2:['ESQ', 'PRE'] },
                                                         { id:mainsId++, name : 'Anneau', genre:'ms', mat:[1, 7, 8, 10, 12, 13], bonus:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'], bonus2:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'VIE', 'SOU', 'MOR'], malus:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'], malus2:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'] }
                                                         ]}, 
                      { id:locId++, name:'Tête', mods: [
                                                        { id:teteId++, name : 'Foulard', genre:'ms', mat:[0, 1, 2, 3]/*, bonus:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'], bonus2:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'], malus:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'], malus2:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR']*/ },
                                                        { id:teteId++, name : 'Bandeau', genre:'ms', mat:[0, 1, 2, 3]/*, bonus:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'], bonus2:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'], malus:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'], malus2:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR']*/ },
                                                        { id:teteId++, name : 'Couronne', genre:'fs', mat:[0, 1, 2, 7, 8, 10, 12, 13]/*, bonus:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'], bonus2:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'], malus:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'], malus2:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR']*/ },
                                                        { id:teteId++, name : 'Torque', genre:'ms', mat:[1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13]/*, bonus:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'], bonus2:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'], malus:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'], malus2:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR']*/ },
                                                        { id:teteId++, name : 'Monocle', genre:'ms', mat:[7, 8, 10, 12, 13]/*, bonus:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'], bonus2:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'], malus:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR'], malus2:['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR']*/ },
                                                        { id:teteId++, name : 'Capuche', genre:'fs', mat:[1, 2, 3]/*, bonus:['VOL', 'VIT', 'ESQ'], bonus2:['ESQ', 'VOL', 'VIT', 'ARM'], malus:['PRE'], malus2:['PRE']*/ },
                                                        { id:teteId++, name : 'Capuchon', genre:'ms', mat:[1, 2, 3, 11]/*, bonus:['VOL', 'VIT', 'ESQ'], bonus2:['ARM', 'VOL', 'VIT'], malus:['PRE'], malus2:['PRE']*/ },
                                                        { id:teteId++, name : 'Camail', genre:'ms', mat:[6, 9, 11, 13]/*, bonus:['ARM', 'VOL', 'VIT'], bonus2:['VOL', 'VIT', 'ARM'], malus:['PRE', 'ESQ'], malus2:['PRE', 'ESQ']*/ },
                                                        { id:teteId++, name : 'Casque', genre:'ms', mat:[3, 6, 7, 8, 9, 10, 12, 13] },
                                                        { id:teteId++, name : 'Heaume', genre:'ms', mat:[7, 8, 10, 12, 13] },
                                                        { id:teteId++, name : 'Barbute', genre:'fs', mat:[7, 8, 10, 12, 13] },
                                                        { id:teteId++, name : 'Salade', genre:'fs', mat:[7, 8, 10, 12, 13] },
                                                        { id:teteId++, name : 'Morion', genre:'ms', mat:[7, 8, 10, 12, 13] },
                                                        { id:teteId++, name : 'Bassinet', genre:'ms', mat:[7, 8, 10, 12, 13] }
                                                        ]}
                      ],
        DEF_CARACS : ['VIT', 'ESQ', 'PRE', 'PUI', 'VOL', 'ARM', 'VIE', 'SOU', 'MOR']		
};