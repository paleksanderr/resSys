import React, { Component } from "react";
import Hotel from "./Hotel/Hotel";

export default class Hotels extends Component {
  render() {
    return (
      <div className="menu">
        <h3>Hotels</h3>
        <Hotel />
        <Hotel />
        <Hotel />
      </div>
    );
  }
}
