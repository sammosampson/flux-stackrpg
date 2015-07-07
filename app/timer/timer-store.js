'use strict';

import AppDispatcher from '../dispatcher';
import TimerConstants from './timer-constants';
import FluxStore from '../flux-store';

let state = {
	currentTime : 0
};

class TimerStore extends FluxStore {
	_tick() {
	    window.setTimeout(() => {
	        state.currentTime++;
	        super.emitChange();
	        this._tick();
	    }, 1000);
	}

	getState() {
		return state;
	}
}

let _TimerStore = new TimerStore();
export default _TimerStore;

AppDispatcher
	.when(TimerConstants.TIMER_START)
		.then((action) =>	_TimerStore._tick());
