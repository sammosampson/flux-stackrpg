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

    when(type) {
      return new AppDispatcherWhen(this, type);
    }
}

class AppDispatcherWhen {
  constructor(dispatcher, type)	{
    this.dispatcher = dispatcher;
    this.actionType = type;
  }

  then(callback) {
    this.dispatcher.register((payload) => {
        if(payload.action.type === this.actionType) {
          callback(payload.action);
        }
    });
  }
}

let _AppDispatcher = new AppDispatcher();

export default _AppDispatcher;
