import React, { Component } from "react";
import spinner21 from "./spinner21.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="my-3" src={spinner21} alt="loading" />
      </div>
    );
  }
}

export default Spinner;
