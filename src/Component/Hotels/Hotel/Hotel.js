import React from "react";
import styles from "./hotel.module.css";
import hotelImg from "../../../assets/images/pexels-jeffrey-czum-2501965.jpg";

export default function Hotel() {
  return (
    <div className={`${styles.hotel} `}>
      <img alt="" src={hotelImg} className="img-fluid "></img>
      <h4>Hotel</h4>
    </div>
  );
}
