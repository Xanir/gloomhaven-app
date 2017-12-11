
var ConfigBase = function() {
	Object.seal(this);
};
module.exports = ConfigBase;

ConfigBase.prototype.generateGetterSetter = function(type) {
	var internalVal = null;
	var getter = function() {
		return internalVal;
	}
	var setter = null;
	if (type === 'integer') {
		setter = function(val) {
			val = +val;
			if (isNaN(val)) {
				throw 'value must be a number';
			}
			internalVal = val;
		}
	} else if (type === 'string') {
		setter = function(val) {
			val = ""+val;
			internalVal = val;
		}
	}
}