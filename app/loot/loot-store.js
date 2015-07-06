'use strict';

import AppDispatcher from '../dispatcher';
import BattleStackStore from '../battles/battle-stack-store'
import GoldItem from './gold-item'
import Dice from './dice'
import EventEmitter from 'events';

let state = {
	stack: []
};

class LootStore extends EventEmitter.EventEmitter {
	constructor()	{
		super();
		BattleStackStore.addChangeListener(this._addLootIfMosterKilled.bind(this));
	}

	_addLootIfMosterKilled() {
		if(BattleStackStore.getState().monsterKilledOnLastTick) {
			state.stack.push(new GoldItem(Dice.rollD20()));
			this.emitChange();
		}
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

let _LootStore = new LootStore();

export default _LootStore;

AppDispatcher.register((payload) => {
	let action = payload.action;
	switch(action.type) {
		default:
			break;
	}
});
