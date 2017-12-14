
var Services = require(__basedir + '/services/Services.js');

var AttackModifierConfig = function AttackModifierConfig() {
	Services.genConfigField(this, 'shuffle', 'boolean');
	Services.genConfigField(this, 'op', 'string');
	Services.genConfigField(this, 'value', 'integer');
	Object.seal(this);
};
module.exports = AttackModifierConfig;

AttackModifierConfig.prototype.shuffle = false;
AttackModifierConfig.prototype.op = '+';
AttackModifierConfig.prototype.value = 0;
Object.seal(AttackModifierConfig.prototype);
