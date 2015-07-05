'use strict';

import AppDispatcher from '../dispatcher';
import MonsterBagConstants from './monster-bag-constants';
import Monster from './monster';
import EventEmitter from 'events';

let state = {
	bag : []
};

class MonsterBagStore extends EventEmitter.EventEmitter {
	_add(monsterName) {
		state.bag.push(new Monster(monsterName));
		this.emitChange();
	}

	getState() {
		return state;
	}

	emitChange() {
		this.emit('CHANGE');
	}

	addChangeListener(cb) {
		this.on('CHANGE', cb)
	}

	removeChangeListener(cb) {
		this.removeListener('CHANGE', cb);
	}
}

let _MonsterBagStore = new MonsterBagStore();

export default _MonsterBagStore;

AppDispatcher.register((payload) => {
	let action = payload.action;
	switch(action.type) {
		case MonsterBagConstants.ADD_MONSTER:
			_MonsterBagStore._add(action.monsterName);
			break;
		default:
			break;
	}
});
