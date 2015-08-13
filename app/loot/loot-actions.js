import AppDispatcher from '../dispatcher';
import LootConstants from './loot-constants';

export default function lootSelected (loot) {
  return {
      type: LootConstants.LOOT_SELECTED,
      payload: loot
  };
}
