/*
 * :: function setProp ::
 *
 * nMask is a bitmask:
 *  flag 0x1: property is enumerable,
 *  flag 0x2: property is configurable,
 *  flag 0x4: property is writable (only applies if no setterFn is passed),
 * obj is the object on which to define the property;
 * propName is the name of the property to be defined or modified;
 * getterVal is the value or getter function to assign;
 * setterFn is the setter function to assign;
 *
 */
function setProp (nMask, obj, propName, getterVal, setterFn) {
    var config = {};
    config.enumerable = Boolean(nMask & 1);
    config.configurable = Boolean(nMask & 2);

    if (setterFn instanceof Function) {
        config.set = setterFn;
        if (!getterVal instanceof Function) {
            throw 'If a setter function is used it must be paired with a getter function';
        } else {
            config.get = getterVal;
        }
    } else {
        config.writable = Boolean(nMask & 4);
        if (getterVal) {
            config.value = getterVal;
        }
    }

    Object.defineProperty(obj, propName, config);
    return obj;
}

module.exports = setProp;