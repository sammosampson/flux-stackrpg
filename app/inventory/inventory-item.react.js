import React from 'react';
import InventoryActions from './inventory-actions';

export default class InventoryItem extends React.Component {
  _equipItem() {
    InventoryActions.itemEquipt(this.props.potency);
  }

  render() {
    return(
      <div className="inventoryItem" key={this.props.key}>
        <div className="noselect" onClick={this._equipItem.bind(this)}>
            {this.props.name} : {this.props.potency}
        </div>
      </div>
      );
  }
}
