import React, { Component } from 'react';

export default class NumberTile extends Component {
  render() {
    return <svg viewBox="0 0 600 300" width={this.props.width}>

      <symbol id="s-text">
        <text  x="600" y="50%" dy=".35em" textAnchor="end">
          {this.props.currentNumber}
        </text>
      </symbol>

      <use xlinkHref="#s-text" className="text"></use>
      <use xlinkHref="#s-text" className="text"></use>
      <use xlinkHref="#s-text" className="text"></use>
      <use xlinkHref="#s-text" className="text"></use>
      <use xlinkHref="#s-text" className="text"></use>
    </svg>;
  }
};
