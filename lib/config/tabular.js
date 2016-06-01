/*
 * TabDT contient toutes les données publiées pour les datatables
 * - Déclaration :
 * TabDT.<Table> = new Tabular.Table(...);
 * - Exploitation (html) :
 * {{> tabular table=TabDT.TeamGladiators selector=teamGlads class="table table-striped table-condensed"}}
 * NOTE : le selector est optionnel, la classe aussi
 */

// DATATABLES https://github.com/aldeed/meteor-tabular
TabDT = {};
Meteor.isClient && Template.registerHelper('TabDT', TabDT);
