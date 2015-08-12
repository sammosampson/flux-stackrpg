import tick from './timer-actions'
import dispatchAction from '../dispatch-action';

let currentTime = 0;

class Clock {
    start() {
      window.setTimeout(() => {
          currentTime++;
          dispatchAction(tick(currentTime));
          this.start();
      }, 1000);
    }
}

export default new Clock();
