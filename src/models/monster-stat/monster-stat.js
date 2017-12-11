
var MonsterStatConfig = require('./monster-stat-config.js');

var MonsterStat = function(config) {
	if (!(config instanceof MonsterStatConfig)) throw "bad config object, must be a MonsterStatConfig";

	var MonsterStat = this;
	MonsterStat._config = {};

	Object.getOwnPropertyNames(config.constructor.prototype).forEach(function(key) {
		if (key !== 'constructor') {
			MonsterStat._config[key] = config[key];
		}
	});
	Object.getOwnPropertyNames(config).forEach(function(key) {
		if (key !== 'constructor') {
			MonsterStat._config[key] = config[key];
		}
	});

	Object.freeze(MonsterStat._config);
};
module.exports = MonsterStat;

MonsterStat.config =  MonsterStatConfig;
Object.seal(MonsterStat.prototype);
Object.freeze(MonsterStat);