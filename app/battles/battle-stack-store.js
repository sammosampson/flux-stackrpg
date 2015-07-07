import FluxStore from '../flux-store'
import AppDispatcher from '../dispatcher'
import MonsterBagConstants from '../monsters/monster-bag-constants'
import TimerStore from '../timer/timer-store'
import Monster from './monster'

let state = {
	stack : [],
	monsterKilledOnLastTick : false
};

class BattleStackStore extends FluxStore {
	constructor()	{
		super();
		TimerStore.addChangeListener(this._killMonster.bind(this));
	}

	_killMonster() {
    state.monsterKilledOnLastTick = (state.stack.length > 0);
		state.stack.pop();
		super.emitChange();
  }

	_add(monsterName) {
		state.stack.push(new Monster(monsterName));
		super.emitChange();
	}

	getState() {
		return state;
	}
}

let _BattleStackStore = new BattleStackStore();
export default _BattleStackStore;

AppDispatcher
	.when(MonsterBagConstants.MONSTER_SELECTED)
		.then((action) => _BattleStackStore._add(action.monsterName));
