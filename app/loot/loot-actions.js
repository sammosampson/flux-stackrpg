import AppDispatcher from '../dispatcher';
import LootConstants from './loot-constants';

export default {
    lootSelected: (value) => {
        AppDispatcher.handleViewAction({
            type: LootConstants.LOOT_SELECTED,
            value: value
        });
    }
}
