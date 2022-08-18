import React from "react";
import styles from "./dateForm.module.scss";
import paymentStyles from "../payment.module.scss";
import { ErrorMessage, Field } from "formik";

export const today = Date.parse(new Date().toString());

const DateForm = () => {
  return (
    <div className={paymentStyles.wrapper}>
      <h2 className={paymentStyles.title}>Date and time:</h2>
      <div className={paymentStyles.fields}>
        <label className={styles.selector}>
          <p>Delivery date:</p>
          <Field name={"date"} as="select">
            <option value={new Date(today).toISOString().substr(0, 10)}>
              today
            </option>
            <option
              value={new Date(today + 24 * 3600 * 1000)
                .toISOString()
                .substr(0, 10)}
            >
              tomorrow
            </option>
          </Field>
          <span className={paymentStyles.error}>
            <ErrorMessage name={"street"} />
          </span>
        </label>

        <label className={paymentStyles.inputBlock}>
          <Field
            className={paymentStyles.input}
            name={"time"}
            placeholder={"Your house number..."}
            type={"time"}
            min={new Date(today + 3600 * 1000 * 4).toISOString().substr(11, 5)}
          />
          <span className={paymentStyles.error}>
            <ErrorMessage name={"time"} />
          </span>
        </label>
      </div>
    </div>
  );
};

export default DateForm;
