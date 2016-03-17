import React, { Component } from 'react';
import NumberTile from './numberTile.jsx';
import NumberInput from './numberInput.jsx';
import HistoryChart from './historyChart.jsx';

export default class Widget extends Component {
  constructor(props) {
    super(props);
    const history = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    this.state = {
      height: 500,
      width: 700,
      currentNumber: 50,
      currentKey: history.length,
      maxBarNumber: 10,
      history: history.map((n) => {
        return {key: n, value: Math.floor(Math.random() * 9999)};
      })
    };
  }

  updateNumber = (number) => {
    if (isNaN(number)) {
      return alert('Not a number!');
    }

    let newHistory = [{key: this.state.currentKey, value: number}].concat(this.state.history);
    if (newHistory.length > this.state.maxBarNumber) {
      newHistory = newHistory.slice(0, newHistory.length - 1);
    }
    this.setState({
      currentNumber: number,
      history: newHistory,
      currentKey: this.state.currentKey + 1
    });
  }

  render() {
    return <div className="text-center">
      <NumberInput updateNumber={this.updateNumber} />
      <svg id="widget" height={this.state.height} width={this.state.width}>
        <NumberTile width={this.state.width / 2} currentNumber={this.state.currentNumber} />
        <HistoryChart width={this.state.width / 2} height={this.state.height / 2} data={this.state.history} />
      </svg>
    </div>;
  }
};
