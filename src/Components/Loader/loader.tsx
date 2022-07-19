import React from "react";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.backGround}>
      <div className={styles.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
