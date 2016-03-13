'use strict';

import Observer from './Observer.js';
import Type from './Type.js';

var _instance;

class UtilitiesModules {

	constructor() {
		return UtilitiesModules.getInstance();
	}

	static getInstance() {
        if (!_instance) {
            _instance = {};

            _instance.Observer = Observer;
            _instance.type = new Type();
        }

        return _instance;
    }

}

export default UtilitiesModules;