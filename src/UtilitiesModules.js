'use strict';

import Type from './Type.js';
import Observer from './Observer.js';
import Memento from './Memento.js';

var _instance;

class UtilitiesModules {

	constructor() {
		return UtilitiesModules.getInstance();
	}

	static getInstance() {
        if (!_instance) {
            _instance = {};

            _instance.type = new Type();
            _instance.Observer = Observer;
            _instance.Memento = Memento;
        }

        return _instance;
    }

}

export default UtilitiesModules;