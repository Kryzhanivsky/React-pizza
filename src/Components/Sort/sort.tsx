import React, { FC } from "react";
import styles from "./sort.module.scss";

import { setSortParam } from "../../Redux/Slices/CatalogSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { IPopupParams, popupClick } from "../../Redux/interfaces&types";

export const popup = [
  { param: "popularity (ASC)", value: "rating", order:"asc" },
  { param: "popularity (DESC)", value: "rating", order:"desc" },
  { param: "price (ASC)", value: "price", order:"asc" },
  { param: "price (DESC)", value: "price", order:"desc" },
  { param: "alphabet (ASC)", value: "title", order:"asc" },
  { param: "alphabet (DESC)", value: "title", order:"desc" },
];

const Sort: FC = () => {
  const sortParam = useAppSelector((state) => state.catalog.sortParam);
  const dispatch = useAppDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = React.useState(false);

  const popupHandler = (obj: IPopupParams) => {
    setIsVisible(!isVisible);
    dispatch(setSortParam(obj));
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as popupClick;
      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setIsVisible(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      ref={sortRef}
      onClick={() => setIsVisible(!isVisible)}
      className={styles.sort}
    >
      <div className={styles.sort__label}>
        <svg
          className={isVisible ? "" : styles.active}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>
        <span>{sortParam.param}</span>
      </div>
      {isVisible && (
        <div className={styles.sort_popup}>
          <ul>
            {popup.map((obj, index) => (
              <li
                key={index}
                onClick={() => popupHandler(obj)}
                className={sortParam === obj ? styles.active : ""}
              >
                {obj.param}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
