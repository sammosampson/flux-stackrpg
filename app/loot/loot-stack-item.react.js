import React from 'react';
import View from '../view';
import lootSelected from './loot-actions';
import dispatchAction from '../dispatch-action';

export default class LootStackItem extends View {
  _selectLoot() {
    dispatchAction(lootSelected(this.props.loot));
  }

  render() {
    return(
      <div className="lootItem" key={this.props.key}>
        <div className="noselect" onClick={this._selectLoot.bind(this)}>
          <i className="fa fa-diamond"></i>{this.props.loot.Value}
        </div>
      </div>
      );
  }
}
