'use strict';

import AppDispatcher from '../dispatcher';
import TimerConstants from './timer-constants';
import FluxStore from '../flux-store';

let state = {
	currentTime : 0
};

class TimerStore extends FluxStore {
	_tick(currentTick) {
	    state.currentTime = currentTick;
	}

	getState() {
		return state;
	}
}

let _TimerStore = new TimerStore();
export default _TimerStore;

_TimerStore.storeId = AppDispatcher.register((payload) => {
		if(payload.action.type === TimerConstants.TIMER_TICK) {
			_TimerStore._tick(payload.action.tick);
			_TimerStore.emitChange();
		}
});
