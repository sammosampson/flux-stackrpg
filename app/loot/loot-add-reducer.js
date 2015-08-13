import LootItem from './loot-item'
import Dice from './dice'

export default function addLootIfMonsterInBattleReduce(state, time) {

  if(state.embattledMonsters.size > 0) {
		state.loot = state.loot.push(new LootItem(Dice.rollD20()));
	}
  return state;
}
