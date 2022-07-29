import React, { FC } from "react";
import styles from "./emptyCart.module.scss";
import emptyCart from "../../assets/img/png/empty-cart.png";

import { Link } from "react-router-dom";

const EmptyCart: FC = () => {
  return (
    <div className={styles.root}>
      <h1>Cart is empty 😕</h1>
      <p>
        You probably haven't ordered pizza yet. To order pizza, go to the main
        page.
      </p>
      <img
        className={styles.img}
        width={300}
        height={255}
        src={emptyCart}
        alt="ManAndCart"
      />
      <Link to="/" className={styles.goBackBtn}>
        come back
      </Link>
    </div>
  );
};

export default EmptyCart;
