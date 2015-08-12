import React from 'react';
import View from '../view';

export default class Timer extends View {
  render() {
    return (
      <div>
        <label>Timer:</label>
        <div>{this.props.time}</div>
      </div>
    );
  }
}
