import React from 'react';
import View from '../../view';

export default class GoldCounter extends View {
  render() {
    return (
      <div>
        <label>Gold:</label>
        <div>{this.props.gold}</div>
      </div>
    );
  }
}
