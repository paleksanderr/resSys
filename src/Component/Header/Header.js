import React from "react";
import styles from "./header.module.css";
import Searchbar from "./Searchbar/Searchbar";


export default function Header() {
  return (
    <header className={`${styles.header} container`}>
      <Searchbar />
    </header>
  );
}





  