
import TimerActions from './timer-actions'

let currentTime = 0;

class Clock {
    start() {
      window.setTimeout(() => {
          currentTime++;
          TimerActions.tick(currentTime);
          this.start();
      }, 1000);
    }
}

export default new Clock();
