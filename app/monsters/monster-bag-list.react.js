import React from 'react';
import View from '../view';
import MonsterBagItem from './monster-bag-item.react';

export default class MonsterBagList extends View {
  render() {
    return (
      <div className="clearfix"> {
        this.props.monsters.map((monster, index) => {
          return <MonsterBagItem monsterName={monster.Name} key={index}/>;
        })}
      </div>);
  }
}
