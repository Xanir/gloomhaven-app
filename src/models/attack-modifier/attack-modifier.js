
var AttackModifierConfig = require('./attack-modifier-config.js');

var AttackModifier = function(config) {
	if (!(config instanceof AttackModifierConfig)) throw "bad config object, must be a AttackModifierConfig";

	var attackModifier = this;
	attackModifier._config = {};

	Object.getOwnPropertyNames(config.constructor.prototype).forEach(function(key) {
		if (key !== 'constructor') {
			attackModifier._config[key] = config[key];
		}
	});
	Object.getOwnPropertyNames(config).forEach(function(key) {
		if (key !== 'constructor') {
			attackModifier._config[key] = config[key];
		}
	});

	Object.freeze(attackModifier._config);
};
module.exports = AttackModifier;

AttackModifier.config =  AttackModifierConfig;
Object.seal(AttackModifier.prototype);
Object.freeze(AttackModifier);