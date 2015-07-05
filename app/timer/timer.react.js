import React from 'react';
import TimerActions from './timer-actions';
import TimerStore from './timer-store';

export default class Timer extends React.Component {
  constructor(props) {
		super(props);
		this.state = TimerStore.getState();
		this.changeCallback = this._onChange.bind(this);
	}

	componentWillMount() {
		TimerStore.addChangeListener(this.changeCallback);
		TimerActions.start();
	}

	componentWillUnmount() {
		TimerStore.removeChangeListener(this.changeCallback);
	}

	_onChange() {
    this.setState(TimerStore.getState())
	}

  render() {
    return (
      <span>{this.state.currentTime}</span>
    );
  }
}
