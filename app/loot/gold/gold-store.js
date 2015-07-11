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
	}

	getState() {
		return state;
	}
}

let _GoldStore = new GoldStore();

export default _GoldStore;

_GoldStore.storeId = AppDispatcher.register((payload) => {
		if(payload.action.type === LootConstants.LOOT_SELECTED) {
			_GoldStore._addGold(payload.action.loot.Value);
			_GoldStore.emitChange();
		}
});
