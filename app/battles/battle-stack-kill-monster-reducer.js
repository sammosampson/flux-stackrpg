export default function killMonsterReduce(state, monsterName) {
  state.embattledMonsters = state.embattledMonsters.pop();
  return state;
}
