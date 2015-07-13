import React from 'react';
import TimerActions from './timer-actions';
import TimerStore from './timer-store';

export default class Timer extends React.Component {
  constructor(props) {
		super(props);
		this.state = { currentTime : TimerStore.currentTime };
		this.changeCallback = this._onChange.bind(this);
		TimerStore.addChangeListener(this.changeCallback);
	}

	componentWillUnmount() {
		TimerStore.removeChangeListener(this.changeCallback);
	}

	_onChange() {
    this.setState({
      currentTime: TimerStore.currentTime
    });
	}

  render() {
    return (
      <div>
        <label>Timer:</label>
        <div>{this.state}</div>
      </div>
    );
  }
}
