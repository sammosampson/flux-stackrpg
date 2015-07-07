'use strict';

import React from 'react';
import EventEmitter from 'events';

export default class FluxStore extends EventEmitter.EventEmitter {
  constructor()	{
		super();
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
