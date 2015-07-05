'use strict';

import AppDispatcher from '../dispatcher';
import TimerConstants from './timer-constants';
import EventEmitter from 'events';

let state = {
	currentTime : 0
};

class TimerStore extends EventEmitter.EventEmitter {
	_tick() {
	    window.setTimeout(() => {
	        state.currentTime--;
	        if(state.currentTime === -1) {
	           state.currentTime = 5;
	        }
	        this.emitChange();
	        this._tick();
	    }, 1000);
	}

	getState() {
		return state;
	}

	emitChange() {
		this.emit('CHANGE');
	}

	addChangeListener(cb) {
		this.on('CHANGE', cb)
	}

	removeChangeListener(cb) {
		this.removeListener('CHANGE', cb);
	}
}

let _TimerStore = new TimerStore();

export default _TimerStore;

AppDispatcher.register((payload) => {
	let action = payload.action;
	switch(action.type) {
		case TimerConstants.TIMER_START:
			_TimerStore._tick(TimerStore);
			break;
		default:
			break;
	}
});
