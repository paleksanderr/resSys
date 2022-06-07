import React, { Component } from "react";
import Hotel from "./Hotel/Hotel";
import styles from  './hotels.module.css';

export default class Hotels extends Component {
  render() {
    return (
      <div className={`${styles.container} container` }>
        <h3 className={`${styles.title}`}>Best places</h3>
        <Hotel />
        <Hotel />
        <Hotel />
      </div>
    );
  }
}
