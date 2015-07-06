import React from 'react';
import LootStackItem from './loot-stack-item.react';

export default class LootStackList extends React.Component {
  render() {
    return (
      <div> {
        this.props.stack.map((loot, index) => {
          return <LootStackItem value={loot.Value} key={index}/>;
        })}
      </div>);
  }
}
