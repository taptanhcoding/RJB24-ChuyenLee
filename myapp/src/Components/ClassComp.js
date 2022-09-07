import React, { Component } from "react";

export default class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {number:1};
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  change = () => {
    this.setState({number: this.state.number + 1})
  }

  change2 = () => {
    this.setState({number: this.state.number - 1})

  }

  render() {
    return (
      <>
        <div>ClassComp</div>
        <h1 style={{color:'red'}}>{this.state.number}</h1>
        <button onClick={this.change}>Plus</button>
        <button onClick={this.change2}>Reduce</button>
      </>
    );
  }
}
