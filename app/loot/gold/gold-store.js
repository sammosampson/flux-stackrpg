'use strict';

import AppDispatcher from '../../dispatcher';
import LootConstants from '../loot-constants'
import EventEmitter from 'events';

let state = {
	goldCount: 0
};

class GoldStore extends EventEmitter.EventEmitter {
	_addGold(value) {
		state.goldCount += value;
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

let _GoldStore = new GoldStore();

export default _GoldStore;

AppDispatcher.register((payload) => {
	let action = payload.action;
	switch(action.type) {
		case LootConstants.LOOT_SELECTED:
			_GoldStore._addGold(action.value);
			break;
		default:
			break;
	}
});
