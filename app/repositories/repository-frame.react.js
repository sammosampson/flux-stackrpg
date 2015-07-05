import React from 'react';
import RepositoryList from './repository-list.react';
import RepositoryActions from './repository-actions';
import RepositoryStore from './repository-store';

export default class RepositoryFrame extends React.Component {
  constructor(props) {
		super(props);
		this.state = RepositoryStore.getState();
		this.changeCallback = this._onChange.bind(this);
	}

	componentWillMount() {
		RepositoryStore.addChangeListener(this.changeCallback);
		RepositoryActions.fetch('jackfranklin');
	}

	componentWillUnmount() {
		RepositoryStore.removeChangeListener(this.changeCallback);
	}

	_onChange() {
    this.setState(RepositoryStore.getState())
	}

  render() {
    return (
      <div>
        <h2>Open Sauce</h2>
        <RepositoryList repositories={this.state.repositories}/>
      </div>
    );
  }
}
