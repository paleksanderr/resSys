import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <input type="text" placeholder="Search" />
      </div>
    </header>
  );
}

export default Header;
