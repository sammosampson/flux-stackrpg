import React from 'react';
import Timer from './timer/timer.react';
import TimerActions from './timer/timer-actions';
import GoldCounter from './loot/gold-counter.react';
import MonsterBag from './monsters/monster-bag.react';
import MonsterBagActions from './monsters/monster-bag-actions';
import BattleStack from './battles/battle-stack.react';
import LootStack from './loot/loot-stack.react';

export default class StackRpgFrame extends React.Component {
  componentWillMount() {
    TimerActions.start();
    MonsterBagActions.addMonster("Grumble");
    MonsterBagActions.addMonster("Scrammo");
  }

  render() {
    return (
      <div>
        <Timer />
        <GoldCounter />
        <MonsterBag />
        <BattleStack />
        <LootStack />
      </div>
    );
  }
}
