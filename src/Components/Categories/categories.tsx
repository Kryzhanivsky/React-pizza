import React from "react";
import styles from "./Categories.module.scss";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setActiveCategory } from "../../Redux/Slices/CatalogSlice";

const categories = ["All", "Meat", "Vegetarian", "Grill", "Acute", "Closed"];

const Categories = React.memo(() => {
  const { activeCategory } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  return (
    <ul className={styles.wrapper}>
      {categories.map((text, id) => {
        return (
          <li
            className={activeCategory === id ? styles.active : ""}
            key={id}
            onClick={() => dispatch(setActiveCategory(id))}
          >
            {text}
          </li>
        );
      })}
    </ul>
  );
});

export default Categories;
