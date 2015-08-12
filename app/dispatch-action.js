import AppDispatcher from './dispatcher';

export default function dispatchAction(action) {
  AppDispatcher.handleViewAction(action);
}
