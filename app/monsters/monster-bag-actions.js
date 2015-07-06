import AppDispatcher from '../dispatcher';
import MonsterBagConstants from './monster-bag-constants';

export default {
    addMonster: (name) => {
        AppDispatcher.handleViewAction({
            type: MonsterBagConstants.ADD_MONSTER,
            monsterName: name
        });
    },

    monsterSelected: (name) => {
        AppDispatcher.handleViewAction({
            type: MonsterBagConstants.MONSTER_SELECTED,
            monsterName: name
        });
    }
}
