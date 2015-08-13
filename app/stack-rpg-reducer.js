import Immutable from 'immutable';
import timerReduce from './timer/timer-reducer';
import TimerConstants from './timer/timer-constants';
import monsterBagReduce from './monsters/monster-bag-reducer';
import MonsterBagConstants from './monsters/monster-bag-constants';
import battleStackEmbattleMonsterReduce from './battles/battle-stack-embattle-monster-reducer';
import battleStackKillMonsterReduce from './battles/battle-stack-kill-monster-reducer';
import LootConstants from './loot/loot-constants'
import lootAddIfMonsterInBattleReduce from './loot/loot-add-reducer'
import lootRemoveReduce from './loot/loot-remove-reducer'
import goldAddReduce from './loot/gold/gold-add-reducer'

const buildReducer = handlers => {
  return (state, action) => {
      return Immutable.Map(handlers)
      .filter((handler, actionType) => actionType === action.type)
      .reduce((partialState, handler) => handler(partialState, action.payload), state);
  };
};

export default buildReducer({
  [MonsterBagConstants.ADD_MONSTER]: monsterBagReduce,

  [MonsterBagConstants.MONSTER_SELECTED]: battleStackEmbattleMonsterReduce,

  [LootConstants.LOOT_SELECTED]: (state, loot) => {
    lootRemoveReduce(state, loot);
    goldAddReduce(state, loot);
    return state;
  },

  [TimerConstants.TIMER_TICK]: (state, currentTick) => {
    state = timerReduce(state, currentTick);
    state = lootAddIfMonsterInBattleReduce(state, currentTick);
    state = battleStackKillMonsterReduce(state, currentTick);
    return state;
  }
});
