import React from 'react';
import InventoryItem from './inventory-item.react';

export default class InventoryList extends React.Component {
  render() {
    return (
      <div className="clearfix"> {
        this.props.items.map((item, index) => {
          return <InventoryItem name={item.Name} potency={item.Potency} key={index}/>;
        })}
      </div>);
  }
}
