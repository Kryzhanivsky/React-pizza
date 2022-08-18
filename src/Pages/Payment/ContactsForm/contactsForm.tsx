import React from "react";
import paymentStyles from "../payment.module.scss";
import { ErrorMessage, Field } from "formik";

const ContactsForm = () => {
  return (
    <div className={paymentStyles.wrapper}>
      <h2 className={paymentStyles.title}>Contacts:</h2>
      <div className={paymentStyles.fields}>
        <label className={paymentStyles.inputBlock}>
          <Field
            className={paymentStyles.input}
            name={"name"}
            placeholder={"Your name..."}
          />
          <span className={paymentStyles.error}>
            <ErrorMessage name={"name"} />
          </span>
        </label>

        <label className={paymentStyles.inputBlock}>
          <Field
            className={paymentStyles.input}
            name={"phoneNumber"}
            placeholder={"Your phone number..."}
          />
          <span className={paymentStyles.error}>
            <ErrorMessage name={"phoneNumber"} />
          </span>
        </label>

        <label className={paymentStyles.inputBlock}>
          <Field
            className={paymentStyles.input}
            name={"email"}
            placeholder={"Your email..."}
          />
          <span className={paymentStyles.error}>
            <ErrorMessage name={"email"} />
          </span>
        </label>
      </div>
    </div>
  );
};

export default ContactsForm;
