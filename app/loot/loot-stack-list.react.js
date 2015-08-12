import React from 'react';
import LootStackItem from './loot-stack-item.react';

export default class LootStackList extends React.Component {
  render() {
    return (
      <div className="clearFix"> {
        this.props.stack.map((loot, index) => {
          return <LootStackItem loot={loot} key={index}/>;
        })}
      </div>);
  }
}
