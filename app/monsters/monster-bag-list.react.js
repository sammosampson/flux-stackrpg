import React from 'react';
import MonsterBagItem from './monster-bag-item.react';

export default class MonsterBagList extends React.Component {
  render() {
    return (
      <div> {
        this.props.monsters.map((monster, index) => {
          return <MonsterBagItem monsterName={monster.Name} key={index}/>;
        })}
      </div>);
  }
}
