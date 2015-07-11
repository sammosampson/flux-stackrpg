'use strict';

import AppDispatcher from '../dispatcher';
import MonsterBagConstants from './monster-bag-constants';
import Monster from './monster';
import FluxStore from '../flux-store';

let state = {
	monsters : []
};

class MonsterBagStore extends FluxStore {
	_add(monsterName) {
		state.monsters.push(new Monster(monsterName));
	}

	getState() {
		return state;
	}
}

let _MonsterBagStore = new MonsterBagStore();
export default _MonsterBagStore;

_MonsterBagStore.storeId = AppDispatcher.register((payload) => {
		if(payload.action.type === MonsterBagConstants.ADD_MONSTER) {
			_MonsterBagStore._add(payload.action.monsterName);
			_MonsterBagStore.emitChange();
		}
});
