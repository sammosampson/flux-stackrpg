import React from 'react';
import Repository from './repository.react';

export default class RepositoryList extends React.Component {
  render() {
    var repositories = this.props.repositories.map((repository) => {
      return <li key={repository.id}><Repository repository={repository} /></li>;
    });
    return <ul>{repositories}</ul>;
  }
}
