'use strict';

class Type {

	findout(value) {
		var type = Object.prototype.toString.apply(value);

        return type.indexOf('object') === -1 ? type : type.slice(8, -1).toLowerCase(); 
	}

	isString(value) {
		return this.findout(value) === 'string';
	}

	isNumber(value) {
		return this.findout(value) === 'number';
	}

	isBoolean(value) {
		return this.findout(value) === 'boolean';
	}

	isUndefined(value) {
		return this.findout(value) === 'undefined';
	}

	isNull(value) {
		return this.findout(value) === 'null';
	}

	isObject(value) {
		return this.findout(value) === 'object';
	}

	isArray(value) {
		return this.findout(value) === 'array';
	}

	isFunction(value) {
		return this.findout(value) === 'function';
	}

}

export default Type;