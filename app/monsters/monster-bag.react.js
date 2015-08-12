import React from 'react';
import View from '../view';
import MonsterBagList from './monster-bag-list.react';
import StackContainer from '../stack-container.react'

export default class MonsterBag extends View {
  render() {
    return (
      <StackContainer title="Monster Bag:">
        <MonsterBagList monsters={this.props.monsters}/>
      </StackContainer>
    );
  }
}
