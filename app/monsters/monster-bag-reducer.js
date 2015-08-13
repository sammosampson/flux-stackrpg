import Monster from './monster'
export default function reduce(state, monsterName) {
  state.monsters = state.monsters.push(new Monster(monsterName));
  return state;
}
