import React from "react";
import paymentStyles from "../payment.module.scss";
import styles from "./paymentMethod.module.scss";
import { Field } from "formik";

const PaymentMethod = () => {
  return (
    <div className={paymentStyles.wrapper}>
      <h2 className={paymentStyles.title}>Payment method:</h2>
      <div className={styles.fields}>
        <div className={styles.section}>
          <h3>Delivery method:</h3>
          <div>
            <label>
              <Field
                name={"delivery"}
                type={"radio"}
                value={"Delivery by courier"}
                checked
              />
              <span>Delivery by courier</span>
            </label>
            <label>
              <Field name={"delivery"} type={"radio"} value={"Self pickup"} />
              <span>Self pickup</span>
            </label>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Payment method:</h3>
          <div>
            <label>
              <Field
                name={"payment"}
                type={"radio"}
                value={"by cash on receipt"}
                checked
              />
              <span>by cash on receipt</span>
            </label>

            <label>
              <Field
                name={"payment"}
                type={"radio"}
                value={"by cart on receipt"}
              />
              <span>by cart on receipt</span>
            </label>

            <label>
              <Field
                name={"payment"}
                type={"radio"}
                value={"contactless payment by card"}
              />
              <span>contactless payment by card</span>
            </label>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Comment on the order</h3>
          <Field name={'comment'} as={'textarea'} />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
