'use strict';

import AppDispatcher from '../../dispatcher';
import LootConstants from '../loot-constants'
import FluxStore from '../../flux-store';

let goldCount = 0;

class GoldStore extends FluxStore {
	_addGold(value) {
		goldCount += value;
	}

	get goldCount() {
		return goldCount;
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
