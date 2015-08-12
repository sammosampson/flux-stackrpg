import React from 'react';
import View from '../view';
import { monsterSelected } from './monster-bag-actions';
import dispatchAction from '../dispatch-action';

export default class MonsterBagItem extends View {
  _selectMonster() {
    dispatchAction(monsterSelected(this.props.monsterName));
  }

  render() {
    return(
      <div className="bagItem" key={this.props.key}>
        <div className="noselect" onClick={this._selectMonster.bind(this)}>{this.props.monsterName}</div>
      </div>
      );
  }
}
