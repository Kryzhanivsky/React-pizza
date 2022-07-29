import styles from "./catalog.module.scss";

import React, { useEffect, useState } from "react";
import Categories from "../../Components/Categories/categories";
import Sort from "../../Components/Sort/sort";
import ItemsList from "../../Components/ItemsList/itemsList";
import Pagination from "../../Components/Pagination/pagination";
import { useAppDispatch } from "../../Redux/hooks";
import { fetchCartItems } from "../../Redux/Slices/CartSlice";

const Catalog = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [])

  return (
    <>
      <div className={styles.filtersArea}>
        <button onClick={() => setIsOpen(true)}>Filters</button>
      </div>

      <div
        className={isOpen ? styles.top_bg_active : styles.top_bg}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={isOpen ? styles.top_active : styles.top}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.filters}>
            <h2>Categories</h2>
            <Categories />
            <Sort />
          </div>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </div>

      <ItemsList />
      <Pagination />
    </>
  );
};

export default Catalog;
