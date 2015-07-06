import EventEmitter from 'events'
import AppDispatcher from '../dispatcher'
import MonsterBagConstants from '../monsters/monster-bag-constants'
import TimerStore from '../timer/timer-store'
import Monster from './monster'

let state = {
	stack : [],
	monsterKilledOnLastTick : false
};

class BattleStackStore extends EventEmitter.EventEmitter {
	constructor()	{
		super();
		TimerStore.addChangeListener(this._killMonster.bind(this));
	}

	_killMonster() {
    state.monsterKilledOnLastTick = (state.stack.length > 0);
		state.stack.pop();
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
