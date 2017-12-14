
var Services = require(__basedir + '/services/Services.js');

var MonsterStatConfig = function MonsterStatConfig() {
	Services.genConfigField(this, 'health', 'integer');
	Services.genConfigField(this, 'move', 'integer');
	Services.genConfigField(this, 'range', 'integer');
	Services.genConfigField(this, 'damage', 'integer');
	Services.genConfigField(this, 'shield', 'integer');
	Services.genConfigField(this, 'target', 'integer');
	Object.seal(this);
};
module.exports = MonsterStatConfig;

MonsterStatConfig.prototype.health = 1;
MonsterStatConfig.prototype.move = 0;
MonsterStatConfig.prototype.range = 0;
MonsterStatConfig.prototype.damage = 0;
MonsterStatConfig.prototype.shield = 0;
MonsterStatConfig.prototype.target = 1;
Object.seal(MonsterStatConfig.prototype);
