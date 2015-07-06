import React from 'react';

export default class BattleStackItem extends React.Component {
  render() {
    return(
      <div className="bagItem" key={this.props.key}>
        <div>{this.props.monsterName}</div>
      </div>
      );
  }
}
