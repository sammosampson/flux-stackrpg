'use strict';

import AppDispatcher from '../dispatcher';
import BattleStackStore from '../battles/battle-stack-store'
import LootItem from './loot-item'
import LootConstants from './loot-constants'
import Dice from './dice'
import FluxStore from '../flux-store';

let state = {
	stack: []
};

class LootStore extends FluxStore {
	constructor()	{
		super();
		BattleStackStore.addChangeListener(this._addLootIfMosterKilled.bind(this));
	}

	_removeLoot(loot) {
		state.stack.splice(state.stack.indexOf(loot), 1);
		super.emitChange();
	}

	_addLootIfMosterKilled() {
		if(BattleStackStore.getState().monsterKilledOnLastTick) {
			state.stack.push(new LootItem(Dice.rollD20()));
			super.emitChange();
		}
	}

	getState() {
		return state;
	}
}

let _LootStore = new LootStore();
export default _LootStore;

AppDispatcher
	.when(LootConstants.LOOT_SELECTED)
		.then((action) => _LootStore._removeLoot(action.loot));
