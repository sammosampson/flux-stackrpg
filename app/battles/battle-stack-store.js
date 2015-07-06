'use strict';

import AppDispatcher from '../dispatcher';
import MonsterBagConstants from '../monsters/monster-bag-constants';
import Monster from './monster';
import TimerStore from '../timer/timer-store';
import EventEmitter from 'events';

let state = {
	stack : [],
	deadMonsters : []
};

class BattleStackStore extends EventEmitter.EventEmitter {
	constructor()	{
		super();
		TimerStore.addChangeListener(this._killMonster.bind(this));
	}

	_killMonster() {
    state.deadMonsters.push(state.stack.shift);
		this.emitChange();
  }

	_add(monsterName) {
		state.stack.push(new Monster(monsterName));
		this.emitChange();
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

let _BattleStackStore = new BattleStackStore();

export default _BattleStackStore;

AppDispatcher.register((payload) => {
	let action = payload.action;
	switch(action.type) {
		case MonsterBagConstants.MONSTER_SELECTED:
			_BattleStackStore._add(action.monsterName);
			break;
		default:
			break;
	}
});
