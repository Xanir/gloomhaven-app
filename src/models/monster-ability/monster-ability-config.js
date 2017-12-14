
var Services = require(__basedir + '/services/Services.js');

var MonsterAbilityConfig = function MonsterAbilityConfig() {
	Services.genConfigField(this, 'initiative', 'integer');
	Services.genConfigField(this, 'shuffle', 'boolean');
	Services.genConfigField(this, 'health', 'integer');
	Services.genConfigField(this, 'move', 'integer');
	Services.genConfigField(this, 'range', 'integer');
	Services.genConfigField(this, 'damage', 'integer');
	Services.genConfigField(this, 'target', 'integer');
	Object.seal(this);
};
module.exports = MonsterAbilityConfig;

MonsterAbilityConfig.prototype.initiative = 99;
MonsterAbilityConfig.prototype.shuffle = false;
MonsterAbilityConfig.prototype.health = 0;
MonsterAbilityConfig.prototype.move = null;
MonsterAbilityConfig.prototype.range = 0;
MonsterAbilityConfig.prototype.damage = 0;
MonsterAbilityConfig.prototype.target = 0;
Object.seal(MonsterAbilityConfig.prototype);
