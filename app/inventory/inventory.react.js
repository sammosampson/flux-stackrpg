import React from 'react';
import InventoryStore from './inventory-store';
import InventoryList from './inventory-list.react';
import StackContainer from '../stack-container.react'

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items : InventoryStore.items };
    this.changeCallback = this._onChange.bind(this);
    InventoryStore.addChangeListener(this.changeCallback);
  }

  componentWillUnmount() {
    InventoryStore.removeChangeListener(this.changeCallback);
  }

  _onChange() {
    this.setState({ items: InventoryStore.items });
  }

  render() {
    return (
      <StackContainer title="Inventory:">
        <InventoryList items={this.state.items}/>
      </StackContainer>
    );
  }
}
