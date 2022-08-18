import React from "react";
import styles from "./App.module.scss";
import { Route, Routes } from "react-router";
import Header from "../Header/header";
import Catalog from "../../Pages/Catalog/catalog";
import Cart from "../../Pages/Cart/cart";
import WrongPage from "../../Pages/WrongPage/wrongPage";
import Payment from "../../Pages/Payment/payment";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <hr className={styles.line} />
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<WrongPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
