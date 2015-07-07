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
		super.emitChange();
	}

	getState() {
		return state;
	}
}

let _MonsterBagStore = new MonsterBagStore();
export default _MonsterBagStore;

AppDispatcher
	.when(MonsterBagConstants.ADD_MONSTER)
		.then((action) => _MonsterBagStore._add(action.monsterName));
