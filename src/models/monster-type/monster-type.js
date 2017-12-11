
var MonsterType = function MonsterType(name) {
	this.name = name;
	this._abilities = [];
	this._stats = [];
	this._statsElite = [];
	Object.seal(this);
};
module.exports = MonsterType;

MonsterType.prototype.name = "";
Object.seal(MonsterType.prototype);
