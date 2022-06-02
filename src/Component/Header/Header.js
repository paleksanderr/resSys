import React from "react";
import styles from "./header.module.css";
import Searchbar from "./Searchbar/Searchbar";


function Header() {
  return (
    <header className={styles.header}>
      <Searchbar />
    </header>
  );
}

export default Header;
