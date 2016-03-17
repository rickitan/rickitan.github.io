import React, { Component } from 'react';

export default class NumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
        newNumber : null
    };
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.updateNumber(this.state.newNumber);
  }

  onChange = (e) => {
    this.setState({newNumber: e.target.value});
  }

  render() {
    return <div>
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input placeholder="New number" className="form-control" min="0" max="9999" maxLength="4" onChange={this.onChange} value={this.state.number}/>
        </div>
        <button type="submit" className="btn btn-warning new-number-submit-button">Submit</button>
      </form>
    </div>;
  }
};
