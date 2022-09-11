import React, { Component } from "react";

export default class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {number:0};
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  change = () => {
    if(this.state.number < 10)
    this.setState((prevs)=>({number: prevs.number + 1}))
  }

  change2 = () => {
    if(this.state.number > 0)
    this.setState({number: this.state.number - 1})

  }

  render() {
    return (
      <>
        <div>ClassComp</div>
        <h1 style={{color:'red'}}>{this.state.number}</h1>
        <button className="btn btn-success" onClick={this.change} disabled={this.state.number >= 10}>Plus</button>
        <button className="btn btn-danger" onClick={this.change2} disabled={this.state.number <= 0}>Reduce</button>
      </>
    );
  }
}
