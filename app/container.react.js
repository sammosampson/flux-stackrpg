import React from 'react';

export default class Container extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <div>
            <label>{this.props.title}</label>
            {this.props.children}
        </div>
      </div>
    );
  }
}
