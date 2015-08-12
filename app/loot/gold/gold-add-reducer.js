export default function addGoldReduce(state, loot) {
  state = state.gold += loot.Value;
  return state;
}
