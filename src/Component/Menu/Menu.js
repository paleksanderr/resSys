import React from 'react';
import styles from './menu.module.css';
import { Button } from 'reactstrap';

export default function Menu() {
  return (
    <div className={`${styles.menuContainer} container`}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Button>Home</Button>
        </li>
      </ul>
    </div>
  );
}