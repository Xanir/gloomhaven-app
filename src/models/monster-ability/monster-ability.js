
var MonsterAbilityConfig = require('./monster-ability-config.js');

var MonsterAbility = function(config) {
	if (!(config instanceof MonsterAbilityConfig)) throw "bad config object, must be a MonsterAbilityConfig";

	var monsterAbility = this;
	monsterAbility._config = {};

	Object.getOwnPropertyNames(config.constructor.prototype).forEach(function(key) {
		if (key !== 'constructor') {
			monsterAbility._config[key] = config[key];
		}
	});
	Object.getOwnPropertyNames(config).forEach(function(key) {
		if (key !== 'constructor') {
			monsterAbility._config[key] = config[key];
		}
	});

	Object.freeze(monsterAbility._config);
};
module.exports = MonsterAbility;

MonsterAbility.config =  MonsterAbilityConfig;
Object.seal(MonsterAbility.prototype);
Object.freeze(MonsterAbility);