import AppDispatcher from '../dispatcher';
import TimerConstants from './timer-constants';

export default {
    tick: (currentTick) => {
        AppDispatcher.handleViewAction({
            type: TimerConstants.TIMER_TICK,
            tick: currentTick
        });
    }
}
