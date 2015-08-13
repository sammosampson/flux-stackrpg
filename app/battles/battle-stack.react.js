import React from 'react';
import BattleStackList from './battle-stack-list.react';
import StackContainer from '../stack-container.react'
import View from '../view';

export default class BattleStack extends View {
  render() {
    return (
      <StackContainer title="Battling Monsters:">
        <BattleStackList monsters={this.props.monsters}/>
      </StackContainer>
    );
  }
}
