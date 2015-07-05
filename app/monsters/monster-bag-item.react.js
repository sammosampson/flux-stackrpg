import React from 'react';

export default class MonsterBagItem extends React.Component {
  render() {
    return(
      <div key={this.props.monsterName} className="bagItem">
        <div className="noselect">{this.props.monsterName}</div>
      </div>
      );
  }
}
