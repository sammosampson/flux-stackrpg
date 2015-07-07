'use strict';

import AppDispatcher from '../../dispatcher';
import LootConstants from '../loot-constants'
import FluxStore from '../../flux-store';

let state = {
	goldCount: 0
};

class GoldStore extends FluxStore {
	_addGold(value) {
		state.goldCount += value;
		super.emitChange();
	}

	getState() {
		return state;
	}
}

let _GoldStore = new GoldStore();

export default _GoldStore;

AppDispatcher
	.when(LootConstants.LOOT_SELECTED)
		.then((action) => _GoldStore._addGold(action.loot.Value));
