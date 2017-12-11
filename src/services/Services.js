
var fieldDef = require('./field-definition.js');
var genConfigField = require('./gen-get-set.js');

module.exports = Object.freeze({
	fieldDef: fieldDef,
	genConfigField: function(obj, propName, type) {
		var attrFns = genConfigField(type);
		var getter = function() {
			var val = attrFns.get();
			if (val === undefined && obj.constructor && obj.constructor.prototype) {
				val = obj.constructor.prototype[propName];
			}
			return val;
		}
		fieldDef(1,obj, propName, getter, attrFns.set);
	},
});
