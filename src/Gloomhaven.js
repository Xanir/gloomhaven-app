
var MonsterAbility =    require('./models/monster-ability/monster-ability.js');
var MonsterStat =       require('./models/monster-stat/monster-stat.js');
var MonsterType =       require('./models/monster-type/monster-type.js');
var EnemyConfig = require('./config/Config.js');
var Services = require('./services/Services.js');

module.exports = Object.freeze({
	MonsterAbility: MonsterAbility,
	MonsterStat: MonsterStat,
	MonsterType: MonsterType,
	EnemyConfig: EnemyConfig,
	Services: Services
});

window.gloomhaven = module.exports;
