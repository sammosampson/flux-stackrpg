import FluxStore from '../flux-store'
import AppDispatcher from '../dispatcher'
import MonsterBagConstants from '../monsters/monster-bag-constants'
import TimerConstants from '../timer/timer-constants'
import Monster from './monster'

let state = {
	stack : [],
	monsterKilledOnLastTick : false
};

class BattleStackStore extends FluxStore {
	_killMonster() {
    state.monsterKilledOnLastTick = (state.stack.length > 0);
		state.stack.pop();
  }

	_add(monsterName) {
		state.stack.push(new Monster(monsterName));
	}

	getState() {
		return state;
	}
}

let _BattleStackStore = new BattleStackStore();
export default _BattleStackStore;

_BattleStackStore.storeId = AppDispatcher.register((payload) => {
		if(payload.action.type === MonsterBagConstants.MONSTER_SELECTED) {
			_BattleStackStore._add(payload.action.monsterName);
			_BattleStackStore.emitChange();
		}
		if(payload.action.type === TimerConstants.TIMER_TICK) {
			_BattleStackStore._killMonster();
			_BattleStackStore.emitChange();
		}
});
