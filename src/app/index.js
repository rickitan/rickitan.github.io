// react
import React, { Component } from 'react';
import Widget from '../components/widget.jsx';

export default class App extends Component {
  render () {
    return (
      <div>
        <h1 className="text-center">Leftronic UI Test</h1>
        <Widget />
      </div>
    );
  }
};
