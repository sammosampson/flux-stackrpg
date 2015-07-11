
import TimerActions from './timer-actions'

let currentTime = 0;

export default {
    start: () => {
      window.setTimeout(() => {
          currentTime++;
          TimerActions.tick(currentTime);
          start();
      }, 1000);
    }
}
