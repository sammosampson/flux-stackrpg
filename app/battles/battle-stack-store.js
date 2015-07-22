import FluxStore from '../flux-store'
import AppDispatcher from '../dispatcher'
import MonsterBagConstants from '../monsters/monster-bag-constants'
import TimerConstants from '../timer/timer-constants'
import Monster from '../monsters/monster'

let stack = [];

class BattleStackStore extends FluxStore {
	_killMonster() {
		stack.pop();
  }

	_add(monsterName) {
		stack.push(new Monster(monsterName));
	}

	get stack() {
		return stack;
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
