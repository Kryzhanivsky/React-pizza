import styles from "./catalog.module.scss";

import React, { useEffect } from "react";
import Categories from "../../Components/Categories/categories";
import Sort from "../../Components/Sort/sort";
import ItemsList from "../../Components/ItemsList/itemsList";
import Pagination from "../../Components/Pagination/pagination";
import { useAppDispatch } from "../../Redux/hooks";
import { fetchCartItems } from "../../Redux/Slices/CartSlice";


const Catalog = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCartItems());
  },[dispatch])

  return (
    <>
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <ItemsList />
      <Pagination />
    </>
  );
};

export default Catalog;
