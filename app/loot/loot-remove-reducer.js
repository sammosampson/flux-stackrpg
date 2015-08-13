export default function removeLootReduce(state, loot) {
  state.loot = state.loot.splice(state.loot.indexOf(loot), 1);
  return state;
}
