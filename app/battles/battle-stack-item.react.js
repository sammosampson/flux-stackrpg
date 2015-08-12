import React from 'react';
import View from '../view';

export default class BattleStackItem extends View {
  render() {
    return(
      <div className="bagItem" key={this.props.key}>
        <div>{this.props.monsterName}</div>
      </div>
      );
  }
}
