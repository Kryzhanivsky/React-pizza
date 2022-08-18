import React from "react";
import styles from "./addressForm.module.scss";
import paymentStyles from "../payment.module.scss";
import { ErrorMessage, Field } from "formik";
import streets from "../../../assets/data/streets.json";

const AddressForm = () => {
  return (
    <div className={paymentStyles.wrapper}>
      <h2 className={paymentStyles.title}>Address:</h2>
      <div className={styles.fields}>
        <div className={styles.container}>
          <div className={styles.city}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <title>map-pointer-glyph</title>
              <path
                d="M257.13,125.11c40.21,0,72.52,30.23,72.52,70.43,0,38.59-32.31,70.76-72.52,70.76-40.52,0-72.85-32.17-72.85-70.76,0-40.2,32.33-70.43,72.85-70.43Zm181.54,52.42C438.67,78.79,358,0,257.13,0c-101,0-183.8,78.79-183.8,177.53,0,4.18,0,10.3,2.09,14.15H73.33c0,96.81,183.8,320.32,183.8,320.32S438.67,288.49,438.67,191.68h0V177.53Z"
                fillRule="evenodd"
              />
            </svg>
            <h3>Ternopil</h3>
          </div>

          <div className={styles.selector}>
            <Field name={"street"} as="select">
              <option value="">Your street is...</option>
              {streets.map((street, index) => {
                return (
                  <option key={index} value={street.name}>
                    {street.name}
                  </option>
                );
              })}
            </Field>
            <span  className={paymentStyles.error}>
              <ErrorMessage name={"street"} />
            </span>
          </div>
        </div>

        <div className={styles.container}>
          <label className={paymentStyles.inputBlock}>
            <Field
              className={paymentStyles.input}
              name={"house"}
              placeholder={"Your house number..."}
              type={"number"}
            />
            <span className={paymentStyles.error}>
              <ErrorMessage name={"house"} />
            </span>
          </label>

          <label className={paymentStyles.inputBlock}>
            <Field
              className={paymentStyles.input}
              name={"entrance"}
              placeholder={"Your entrance number..."}
              type={"number"}
            />
            <span className={paymentStyles.error}>
              <ErrorMessage name={"entrance"} />
            </span>
          </label>

          <label className={paymentStyles.inputBlock}>
            <Field
              className={paymentStyles.input}
              name={"flat"}
              placeholder={"Your flat number..."}
              type={"number"}
            />
            <span className={paymentStyles.error}>
              <ErrorMessage name={"flat"} />
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
