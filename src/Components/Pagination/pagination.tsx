import styles from "./pagination.module.scss";
import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setCurrentPage } from "../../Redux/Slices/CatalogSlice";

const Pagination: FC = () => {
  const { amount, currentPage } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();
  const count = Math.ceil(amount / 12);
  let pages = [];

  for (let i = 0; i < count; i++) {
    pages.push(i + 1);
  }

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() =>
          dispatch(
            setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
          )
        }
        className={
          currentPage === 1 ? styles.disabled_btn : styles.move_page_btn
        }
      >
        back
      </button>
      {pages.map((number) => {
        return (
          <button
            key={number}
            onClick={() => dispatch(setCurrentPage(number))}
            className={currentPage === number ? styles.active : styles.page_btn}
          >
            {number}
          </button>
        );
      })}
      <button
        onClick={() =>
          dispatch(
            setCurrentPage(
              currentPage < pages.length ? currentPage + 1 : currentPage
            )
          )
        }
        className={
          currentPage === pages.length
            ? styles.disabled_btn
            : styles.move_page_btn
        }
      >
        forward
      </button>
    </div>
  );
};

export default Pagination;
