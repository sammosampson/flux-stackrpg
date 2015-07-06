import React from 'react';
import BattleStackItem from './battle-stack-item.react';

export default class BattleStackList extends React.Component {
  render() {
    return (
      <div className="clearfix"> {
        this.props.stack.map((monster, index) => {
          return <BattleStackItem monsterName={monster.Name} key={index}/>;
        })}
      </div>);
  }
}
