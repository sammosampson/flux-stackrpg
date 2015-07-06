import React from 'react';
import MonsterBagStore from './monster-bag-store';
import MonsterBagList from './monster-bag-list.react';
import StackContainer from '../stack-container.react'

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
      <StackContainer title="Monster Bag:">
        <MonsterBagList monsters={this.state.monsters}/>
      </StackContainer>
    );
  }
}
