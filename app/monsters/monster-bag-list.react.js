import React from 'react';
import MonsterBagItem from './monster-bag-item.react';

export default class MonsterBagList extends React.Component {
  render() {
    return (
      <div className="clearfix"> {
        this.props.monsters.map((monster) => {
          return <MonsterBagItem monsterName={monster.Name}/>;
        })}
      </div>);
  }
}
