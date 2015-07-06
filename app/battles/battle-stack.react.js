import React from 'react';
import BattleStackStore from './battle-stack-store';
import BattleStackList from './battle-stack-list.react';
import StackContainer from '../stack-container.react'

export default class BattleStack extends React.Component {
  constructor(props) {
    super(props);
    this.state = BattleStackStore.getState();
    this.changeCallback = this._onChange.bind(this);
  }

  componentWillMount() {
    BattleStackStore.addChangeListener(this.changeCallback);
  }

  componentWillUnmount() {
    BattleStackStore.removeChangeListener(this.changeCallback);
  }

  _onChange() {
    this.setState(BattleStackStore.getState())
  }

  render() {
    return (
      <StackContainer title="Battling Monsters:">
        <BattleStackList stack={this.state.stack}/>
      </StackContainer>
    );
  }
}
