import React from 'react';
import GoldStore from './gold-store';

export default class GoldCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = GoldStore.getState();
    this.changeCallback = this._onChange.bind(this);
  }

  componentWillMount() {
    GoldStore.addChangeListener(this.changeCallback);
  }

  componentWillUnmount() {
    GoldStore.removeChangeListener(this.changeCallback);
  }

  _onChange() {
    this.setState(GoldStore.getState())
  }

  render() {
    return (
      <div>
        <label>Gold:</label>
        <div>{this.state.goldCount}</div>
      </div>
    );
  }
}
