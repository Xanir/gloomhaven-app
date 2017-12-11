
var generateGetterSetter = function(type) {
	var internalVal = undefined;
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
	} else if (type === 'boolean') {
		setter = function(val) {
			val = val == true;
			internalVal = val;
		}
	}
	
	return {
		get: getter,
		set: setter
	};
}

module.exports = generateGetterSetter;