import React, { Component } from "react";

export default class ColorItem2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1 style={{ color: this.props.color }}>{this.props.name}</h1>;
  }
}
