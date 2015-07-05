import React from 'react';
import Timer from './timer/timer.react';
import GoldCounter from './loot/gold-counter.react';

export default class StackRpgFrame extends React.Component {
  render() {
    return (
      <div>
        <Timer />
        <GoldCounter />
      </div>
    );
  }
}
