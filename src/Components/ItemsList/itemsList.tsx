import React, { FC, useEffect } from "react";
import styles from "./itemsList.module.scss";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { fetchItems, setCurrentPage } from "../../Redux/Slices/CatalogSlice";
import CatalogItem from "../CatalogItem/CatalogItem";
import CatalogSkeleton from "../Skeletons/CatalogSkeleton";

const ItemsList: FC = () => {
  const dispatch = useAppDispatch();

  const {
    items,
    isLoading,
    searchValue,
    currentPage,
    sortParam,
    activeCategory,
  } = useAppSelector((state) => state.catalog);

  const message = (
    <div className={styles.message}>
      <h1>Nothing found 😕</h1>
      <p>Nothing was found for your request</p>
    </div>
  );

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [activeCategory, searchValue]);

  useEffect(() => {
    dispatch(fetchItems());
  }, [
    currentPage,
    sortParam.value,
    sortParam.order,
    activeCategory,
    searchValue,
  ]);

  return (
    <div className={styles.list}>
      {isLoading
        ? [...new Array(8)].map((_, index) => <CatalogSkeleton key={index} />)
        : items.length === 0
        ? message
        : items.map((item) => <CatalogItem key={item.id} item={item} />)}
    </div>
  );
};

export default ItemsList;
