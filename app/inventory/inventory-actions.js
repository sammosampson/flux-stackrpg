import AppDispatcher from '../dispatcher';
import InventoryConstants from './inventory-constants';

export default {
    addItem: (potency) => {
        AppDispatcher.handleViewAction({
            type: InventoryConstants.ADD_ITEM,
            potency: potency
        });
    },

    itemEquipt: (potency) => {
        AppDispatcher.handleViewAction({
            type: InventoryConstants.EQUIP_ITEM,
            potency: potency
        });
    }
}
