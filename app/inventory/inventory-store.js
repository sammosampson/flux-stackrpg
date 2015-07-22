'use strict';

import AppDispatcher from '../dispatcher';
import InventoryConstants from './inventory-constants';
import Powerup from './item/powerup';
import FluxStore from '../flux-store';

let items = [];

class InventoryStore extends FluxStore {
	_add(potency) {
		items.push(new Powerup(potency));
   }

	get items() {
		return items;
	}
}

let _InventoryStore = new InventoryStore();
export default _InventoryStore;

_InventoryStore.storeId = AppDispatcher.register((payload) => {
		if(payload.action.type === InventoryConstants.ADD_ITEM) {
			_InventoryStore._add(payload.action.potency);
			_InventoryStore.emitChange();
		}
});
