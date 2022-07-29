import React, { FC } from "react";
import styles from "./wrongPage.module.scss";
import emptyCart from "../../assets/img/png/empty-cart.png";

import { Link } from "react-router-dom";

const EmptyCart: FC = () => {
  return (
    <div className={styles.root}>
      <h1>This page does not exist 😕</h1>
      <p>Something went wrong. You may have applied to an incorrect address.</p>
      <img
        className={styles.img}
        width={300}
        height={255}
        src={emptyCart}
        alt="ManAndCart"
      />
      <Link to="/" className={styles.goBackBtn}>
        Return to the main page
      </Link>
    </div>
  );
};

export default EmptyCart;
