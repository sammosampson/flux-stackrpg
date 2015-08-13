import AppDispatcher from '../dispatcher';
import MonsterBagConstants from './monster-bag-constants';

export function addMonster (name) {
  return {
    type: MonsterBagConstants.ADD_MONSTER,
    payload: name
  };
}

export function monsterSelected (name) {
  return {
    type: MonsterBagConstants.MONSTER_SELECTED,
    payload: name
  };
}
