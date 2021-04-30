import React, { Component } from "react";
import windowSize from "react-window-size";

class ScreenSize extends Component {
  render() {
    return (
      <p>
        Screen width is: {this.props.windowWidth}
        <br />
        Screen height is: {this.props.windowHeight}
      </p>
    );
  }
}

export default windowSize(ScreenSize);
