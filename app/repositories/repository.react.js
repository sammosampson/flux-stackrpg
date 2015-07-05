import React from 'react';
export default class Repository extends React.Component {
  render() {
    return(
      <div>
        <h3>{ this.props.repository.name }</h3>
        <p>{ this.props.repository.description }</p>
      </div>
    );
  }
}
