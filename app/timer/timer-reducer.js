export default function reduce(state, currentTick) {
  state.time = currentTick;
  return state;
}
