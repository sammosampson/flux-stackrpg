import { Map as map } from 'immutable';
import timerReduce from './timer/timer-reducer';
import TimerConstants from './timer/timer-constants';
import monsterBagReduce from './monsters/monster-bag-reducer';
import MonsterBagConstants from './monsters/monster-bag-constants';
import battleStackEmbattleMonsterReduce from './battles/battle-stack-embattle-monster-reducer';
import battleStackKillMonsterReduce from './battles/battle-stack-kill-monster-reducer';

const buildReducer = handlers => {
  return (state, action) => {
      return map(handlers)
      .filter((handler, actionType) => actionType === action.type)
      .reduce((partialState, handler) => handler(partialState, action.payload), state);
  };
};

export default buildReducer({
  [MonsterBagConstants.ADD_MONSTER]: monsterBagReduce,
  [MonsterBagConstants.MONSTER_SELECTED]: battleStackEmbattleMonsterReduce,
  [TimerConstants.TIMER_TICK]: (state, currentTick) => {
    state = timerReduce(state, currentTick);
    state = battleStackKillMonsterReduce(state, currentTick);
    return state;
  }
});
