import React from 'react';
import GoldStore from './gold-store';

export default class GoldCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { goldCount: GoldStore.goldCount };
    this.changeCallback = this._onChange.bind(this);
    GoldStore.addChangeListener(this.changeCallback);
  }

  componentWillUnmount() {
    GoldStore.removeChangeListener(this.changeCallback);
  }

  _onChange() {
    this.setState({ goldCount: GoldStore.goldCount })
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
