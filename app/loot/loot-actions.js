import AppDispatcher from '../dispatcher';
import LootConstants from './loot-constants';

export default {
    lootSelected: (loot) => {
        AppDispatcher.handleViewAction({
            type: LootConstants.LOOT_SELECTED,
            loot: loot
        });
    }
}
