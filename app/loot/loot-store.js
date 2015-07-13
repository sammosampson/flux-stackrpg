'use strict';

import AppDispatcher from '../dispatcher';
import MonsterBagConstants from '../monsters/monster-bag-constants'
import TimerConstants from '../timer/timer-constants'
import LootItem from './loot-item'
import LootConstants from './loot-constants'
import Dice from './dice'
import FluxStore from '../flux-store';

let stack = [];
let monstersInBattle = 0;

class LootStore extends FluxStore {
	_removeLoot(loot) {
		stack.splice(stack.indexOf(loot), 1);
	}

	_embattleMonster() {
		monstersInBattle++;
	}

	_addLootIfMonsterKilled() {
		if(monstersInBattle > 0) {
			stack.push(new LootItem(Dice.rollD20()));
			monstersInBattle--;
		}
	}

	get stack() {
		return stack;
	}
}

let _LootStore = new LootStore();
export default _LootStore;

_LootStore.storeId = AppDispatcher.register((payload) => {
	if(payload.action.type === MonsterBagConstants.MONSTER_SELECTED) {
		_LootStore._embattleMonster();
		_LootStore.emitChange();
	}
	if(payload.action.type === TimerConstants.TIMER_TICK) {
		_LootStore._addLootIfMonsterKilled();
		_LootStore.emitChange();
	}
	if(payload.action.type === LootConstants.LOOT_SELECTED) {
		_LootStore._removeLoot(payload.action.loot);
		_LootStore.emitChange();
	}
});
