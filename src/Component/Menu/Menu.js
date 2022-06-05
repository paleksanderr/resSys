import React from 'react';
import styles from './menu.module.css';

export default function Menu() {
  return (
    <div className={`${styles.menuContainer} container`}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="#">Home</a>
        </li>
      </ul>
    </div>
  );
}