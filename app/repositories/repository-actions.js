import RepositorySlave from './repository-slave';
import AppDispatcher from '../dispatcher';
import RepositoryConstants from './repository-constants';

export default {
    fetch: (username) => {
        RepositorySlave.fetch(username).then((repos) => {
        AppDispatcher.handleViewAction({
            type: RepositoryConstants.FETCHING,
            data: repos
        });
      });
    }
}
