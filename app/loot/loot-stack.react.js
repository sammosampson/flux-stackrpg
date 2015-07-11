import React from 'react';
import LootStore from './loot-store';
import LootStackList from './loot-stack-list.react';
import StackContainer from '../stack-container.react'

export default class LootStack extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stack: LootStore.stack };
    this.changeCallback = this._onChange.bind(this);
  }

  componentWillMount() {
    LootStore.addChangeListener(this.changeCallback);
  }

  componentWillUnmount() {
    LootStore.removeChangeListener(this.changeCallback);
  }

  _onChange() {
    this.setState({ stack: LootStore.stack })
  }

  render() {
    return (
      <StackContainer title="Loot Stack:">
        <LootStackList stack={this.state.stack}/>
      </StackContainer>
    );
  }
}
