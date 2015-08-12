import TimerConstants from './timer-constants';

export default function tick(currentTick) {
  return {
    type: TimerConstants.TIMER_TICK,
    payload: currentTick
  };
}
