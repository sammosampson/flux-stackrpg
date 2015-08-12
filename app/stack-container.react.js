import React from 'react';

export default class StackContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <hr />
        <div>
            <label>{this.props.title}</label>
            {this.props.children}
        </div>
      </div>
    );
  }
}
