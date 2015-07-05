'use strict';

import AppDispatcher from '../dispatcher';
import RepositoryConstants from './repository-constants';
import EventEmitter from 'events';

let data = {
	repositories:[]
};

class RepositoryStore extends EventEmitter.EventEmitter {

	getState() {
		return data;
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

let _RepositoryStore = new RepositoryStore();

export default _RepositoryStore;

AppDispatcher.register((payload) => {
	let action = payload.action;
	switch(action.type) {
		case RepositoryConstants.FETCHING:
			data.repositories = action.data;
			_RepositoryStore.emitChange();
			break;
		default:
			break;
	}
});
