import React, { Component } from "react";
import spinner21 from "./spinner21.gif";

export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={spinner21} alt="loading" />
      </div>
    );
  }
}

export default Spinner;
