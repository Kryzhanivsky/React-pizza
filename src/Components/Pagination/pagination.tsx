import styles from "./pagination.module.scss";
import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setCurrentPage } from "../../Redux/Slices/CatalogSlice";

const Pagination: FC = () => {
  const { amount, currentPage } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();
  const count = Math.ceil(amount / 12);

  const fetchPageNumbers = (from: number, to: number): number[] => {
    let pages = [];

    for (let i = from; i <= to; i++) {
      pages.push(i);
    }

    return pages as number[];
  };

  const from =
    currentPage > 1
      ? currentPage === count
        ? currentPage - 2
        : currentPage - 1
      : 1;
  const to =
    currentPage < count
      ? currentPage === 1
        ? currentPage + 2
        : currentPage + 1
      : count;

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
        {
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z" />
          </svg>
        }
      </button>

      {fetchPageNumbers(from, to).map((number) => {
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

      {/*{pages.map((number) => {*/}
      {/*  return (*/}
      {/*    <button*/}
      {/*      key={number}*/}
      {/*      onClick={() => dispatch(setCurrentPage(number))}*/}
      {/*      className={currentPage === number ? styles.active : styles.page_btn}*/}
      {/*    >*/}
      {/*      {number}*/}
      {/*    </button>*/}
      {/*  );*/}
      {/*})}*/}

      <button
        onClick={() =>
          dispatch(
            setCurrentPage(currentPage < count ? currentPage + 1 : currentPage)
          )
        }
        className={
          currentPage === count ? styles.disabled_btn : styles.move_page_btn
        }
      >
        {
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z" />
          </svg>
        }
      </button>
    </div>
  );
};

export default Pagination;
