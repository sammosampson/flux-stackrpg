import React from 'react';
import BattleStackItem from './battle-stack-item.react';
import View from '../view';

export default class BattleStackList extends View {
  render() {
    return (
      <div className="clearfix"> {
        this.props.monsters.map((monster, index) => {
          return <BattleStackItem monsterName={monster.Name} key={index}/>;
        })}
      </div>);
  }
}
