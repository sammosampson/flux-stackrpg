import React from 'react';
import MonsterBagActions from './monster-bag-actions';

export default class MonsterBagItem extends React.Component {
  _selectMonster() {
    MonsterBagActions.monsterSelected(this.props.monsterName);
  }

  render() {
    return(
      <div className="bagItem" key={this.props.key}>
        <div className="noselect" onClick={this._selectMonster.bind(this)}>{this.props.monsterName}</div>
      </div>
      );
  }
}
