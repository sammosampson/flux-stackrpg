import React from 'react';

export default class LootStackItem extends React.Component {
  render() {
    return(
      <div key={this.props.key}>
        <i/>{this.props.value}
      </div>
      );
  }
}
