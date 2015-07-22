import React from 'react';
import Timer from './timer/timer.react';
import Clock from './timer/clock';
import GoldCounter from './loot/gold/gold-counter.react';
import MonsterBag from './monsters/monster-bag.react';
import MonsterBagActions from './monsters/monster-bag-actions';
import InventoryActions from './inventory/inventory-actions';
import Inventory from './inventory/inventory.react';
import BattleStack from './battles/battle-stack.react';
import LootStack from './loot/loot-stack.react';

export default class StackRpgFrame extends React.Component {
  constructor()	{
    super();
    Clock.start();
    MonsterBagActions.addMonster("Grumble");
    MonsterBagActions.addMonster("Scrammo");
    InventoryActions.addItem(2);
  }

  render() {
    return (
      <div>
        <Timer />
        <GoldCounter />
        <MonsterBag />
        <BattleStack />
        <LootStack />
        <Inventory />
      </div>
    );
  }
}
