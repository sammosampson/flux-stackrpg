import React from 'react';
import View from '../view';
import LootStackList from './loot-stack-list.react';
import StackContainer from '../stack-container.react'

export default class LootStack extends View {
  render() {
    return (
      <StackContainer title="Loot Stack:">
        <LootStackList loot={this.props.loot}/>
      </StackContainer>
    );
  }
}
