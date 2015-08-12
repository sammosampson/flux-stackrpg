import Monster from './monster'

export default function embattleMonsterReduce(state, monsterName) {
  state.embattledMonsters = state.embattledMonsters.push(new Monster(monsterName));
  return state;
}
