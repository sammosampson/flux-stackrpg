'use strict';

import AppDispatcher from '../dispatcher';
import BattleStackStore from '../battles/battle-stack-store'
import TimerConstants from '../timer/timer-constants'
import LootItem from './loot-item'
import LootConstants from './loot-constants'
import Dice from './dice'
import FluxStore from '../flux-store';

let stack = [];

class LootStore extends FluxStore {
	_removeLoot(loot) {
		stack.splice(stack.indexOf(loot), 1);
	}

	_addLootIfMonsterKilled(monsterKilledOnLastTick) {
		if(monsterKilledOnLastTick) {
			stack.push(new LootItem(Dice.rollD20()));
		}
	}

	get stack() {
		return stack;
	}
}

let _LootStore = new LootStore();
export default _LootStore;

_LootStore.storeId = AppDispatcher.register((payload) => {
		if(payload.action.type === LootConstants.LOOT_SELECTED) {
			_LootStore._removeLoot(payload.action.loot);
			_LootStore.emitChange();
		}
		if(payload.action.type === TimerConstants.TIMER_TICK) {
			AppDispatcher.waitFor([BattleStackStore.storeId]);
			_LootStore._addLootIfMonsterKilled(BattleStackStore.monsterKilledOnLastTick);
			_LootStore.emitChange();
		}
});
