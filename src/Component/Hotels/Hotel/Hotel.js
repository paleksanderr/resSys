import React from "react";
import styles from "./hotel.module.css";
import hotelImg from "../../../assets/images/pexels-jeffrey-czum-2501965.jpg";

export default function Hotel() {
  return (
    <div className="card">
      <div className="card-body">

    
    <div className={`row ${styles.hotel} `}>
      <div className="col-6 ">
        <img alt="" src={hotelImg} className="img-fluid"></img>
      </div>
      <div className="col-3">
        <p>Tytuł</p>
         <p>
          lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </p>
        <p>Cena</p>
      </div>
      <div className="col-3">
        <p>Miasto</p>
        <p>Kraj</p>
        <p>Ocena 9.9</p>
      </div>
      <div className="col-12">


        <a href="#" className="btn btn-primary px-5 mt-2">
          Look
        </a>
      </div>
    </div>
      </div>
    </div>
  );
}

// WEBPACK FOOTER //
