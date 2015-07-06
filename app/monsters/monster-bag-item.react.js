import React from 'react';

export default class MonsterBagItem extends React.Component {
  _selectMonster() {
    console.log(this.props.monsterName);
  }
  render() {
    return(
      <div key={this.props.key}>
        <div onClick={this._selectMonster.bind(this)}>{this.props.monsterName}</div>
      </div>
      );
  }
}
