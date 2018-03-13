import React, { Component } from 'react';

import Header from './header';

export default class App extends Component {
  //this.props.children is part of react router so App is responsible for displaying children components
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
