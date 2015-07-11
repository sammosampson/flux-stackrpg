import Dispatcher from 'flux';

class AppDispatcher extends Dispatcher.Dispatcher {
    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }

    handleServerAction(action) {
        this.dispatch({
            source: 'SERVER_ACTION',
            action: action
        });
    }
}

let _AppDispatcher = new AppDispatcher();

export default _AppDispatcher;
