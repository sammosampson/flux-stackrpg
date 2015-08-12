import React from 'react';
import Timer from './timer/timer.react';
import StackRpgReducer from './stack-rpg-reducer';
import Clock from './timer/clock';
import GoldCounter from './loot/gold/gold-counter.react';
import MonsterBag from './monsters/monster-bag.react';
import { addMonster } from './monsters/monster-bag-actions';
import InventoryActions from './inventory/inventory-actions';
import Inventory from './inventory/inventory.react';
import BattleStack from './battles/battle-stack.react';
import LootStack from './loot/loot-stack.react';
import dispatchAction from './dispatch-action';
import Dispatcher from './dispatcher';
import { List } from 'immutable';

export default class StackRpgFrame extends React.Component {
  constructor()	{
    super();

    Dispatcher.register((payload) => {
      let reduction = this.state.reduction;
      reduction = StackRpgReducer(reduction, payload.action);
      this.setState({reduction});
    });

    this.state = {
      reduction:  {
        time : 0,
        monsters : new List(),
        embattledMonsters : new List()
      }
    };
  }

  componentDidMount(){
    Clock.start();
    dispatchAction(addMonster("Grumble"));
    dispatchAction(addMonster("Scrammo"));
    InventoryActions.addItem(2);
  }

  render() {
    return (
      <div>
        <Timer time={this.state.reduction.time}/>
        <GoldCounter />
        <MonsterBag monsters={this.state.reduction.monsters} />
        <BattleStack monsters={this.state.reduction.embattledMonsters} />
        <LootStack />
        <Inventory />
      </div>
    );
  }
}
