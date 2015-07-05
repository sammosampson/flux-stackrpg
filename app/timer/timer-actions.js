import AppDispatcher from '../dispatcher';
import TimerConstants from './timer-constants';

export default {
    start: () => {
        AppDispatcher.handleViewAction({
            type: TimerConstants.TIMER_START
        });
    }
}
