import React from 'react';
import MonsterBagStore from './monster-bag-store';
import MonsterBagItem from './monster-bag-item.react';

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
    return (
      <div>
        <hr />
        <div>
            <label>Monster Bag:</label>
            <div className="clearfix"> {
              this.state.bag.map((monster) => {
                return <MonsterBagItem monsterName={monster.Name}/>;
              })}
            </div>
        </div>
      </div>
    );
  }
}
