import React from 'react';
import MonsterBagStore from './monster-bag-store';

export default class MonsterBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = MonsterBagStore.getState();
    this.changeCallback = this._onChange.bind(this);
  }

  componentWillMount() {
    MonsterBagStore.addChangeListener(this.changeCallback);
  }

  componentWillUnmount() {
    MonsterBagStore.removeChangeListener(this.changeCallback);
  }

  _onChange() {
    this.setState(MonsterBagStore.getState())
  }

  render() {
    var monsters = this.state.bag.map((monster) => {
      return (
          <div className="bagItem">
              <div className="noselect">{monster.Name}</div>
          </div>);
    });

    return (
      <div>
        <hr />
        <div>
            <label>Monster Bag:</label>
            <div className="clearfix">{monsters}</div>
        </div>
      </div>
    );
  }
}
