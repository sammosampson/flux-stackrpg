import React from 'react';
import View from '../view';
import LootStackItem from './loot-stack-item.react';

export default class LootStackList extends View {
  render() {
    return (
      <div className="clearfix"> {
        this.props.loot.map((loot, index) => {
          return <LootStackItem loot={loot} key={index}/>;
        })}
      </div>);
  }
}
