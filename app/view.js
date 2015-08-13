import React from 'react';
import shallowEqual from 'shallowequal';

export default class View extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should update?");
    return !shallowEqual(this.props, nextProps) ||
           !shallowEqual(this.state, nextState);
  }
}
