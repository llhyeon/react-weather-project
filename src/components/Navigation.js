import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link to={"/"}>
          My <span className={styles.letter}>W</span>eather.
        </Link>
      </div>
      <div className={styles.menu}>
        <Link className={styles.link} to={"/"}>
          HOME
        </Link>
        <Link className={styles.link} to={"/"}>
          ABOUT
        </Link>
        <Link className={styles.link} to={"/"}>
          CONTACT
        </Link>
        <Link className={styles.link} to={"/"}>
          ETC
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
