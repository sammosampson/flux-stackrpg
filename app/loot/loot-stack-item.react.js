import React from 'react';
import LootActions from './loot-actions';

export default class LootStackItem extends React.Component {
  _selectLoot() {
    LootActions.lootSelected(this.props.value);
  }

  render() {
    return(
      <div className="lootItem" key={this.props.key}>
        <div className="noselect" onClick={this._selectLoot.bind(this)}>
          <i className="fa fa-diamond"></i>{this.props.value}
        </div>
      </div>
      );
  }
}
