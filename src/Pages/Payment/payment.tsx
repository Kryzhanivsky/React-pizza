import React from "react";
import { Form, Formik } from "formik";
import { IFormikValues } from "../../Redux/interfaces&types";
import * as yup from "yup";
import styles from "./payment.module.scss";
import ContactsForm from "./ContactsForm/contactsForm";
import AddressForm from "./AddressForm/addressForm";
import DateForm, { today } from "./DateForm/dateForm";
import PaymentMethod from "./PaymentMethod/paymentMethod";
import { useAppDispatch } from "../../Redux/hooks";
import { deleteAllItems, doOrder } from "../../Redux/Slices/CartSlice";
import { Link, useNavigate } from "react-router-dom";

const ValidationSchema = yup.object().shape({
  name: yup
    .string()
    .max(25, "Must be 25 characters or less")
    .required("Required"),
  phoneNumber: yup
    .string()
    .max(12, "Must be 12 characters or less")
    .required("Required"),
  email: yup.string().email().required("Required"),
  street: yup.string().required("Required"),
  house: yup
    .string()
    .matches(/^[1-9][0-9]*$/g, "Can't be less than one")
    .required("Required"),
  entrance: yup.string().matches(/^[1-9][0-9]*$/g, "Can't be less than one"),
  flat: yup.string().matches(/^[1-9][0-9]*$/g, "Can't be less than one"),
});

const Payment = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const initialValues: IFormikValues = {
    name: "",
    phoneNumber: "",
    email: "",
    street: "",
    house: "",
    entrance: "",
    flat: "",
    date: (new Date().toISOString().substr(0, 10)),
    time: new Date(today + 3600 * 1000 * 4).toISOString().substr(11, 5),
    delivery: "Delivery by courier",
    payment: "by cash on receipt",
    comment: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(doOrder(JSON.stringify(values)));
        dispatch(deleteAllItems());
        setSubmitting(false);
        navigate("/", { replace: true });
      }}
    >
      <div className={styles.content}>
        <Form className={styles.form}>
          <ContactsForm />

          <AddressForm />

          <DateForm />

          <PaymentMethod />

          <div className={styles.bottomButtons}>
            <Link to={"/cart"} className={styles.btn}>
              <span>Back</span>
            </Link>
            <input className={styles.btn} type="submit" value={"Pay"}/>
          </div>


        </Form>
      </div>
    </Formik>
  );
};

export default Payment;
