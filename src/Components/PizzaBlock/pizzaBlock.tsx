import React from 'react';
import styles from "./pizzaBlock.module.scss";

const PizzaBlock = () => {
    return (
        <div className={styles.wrapper}>
            {/*<img className={styles.image} src={obj.imageUrl} alt="Pizza" />*/}
            {/*<h4 className={styles.title}>{obj.title}</h4>*/}
            {/*<div className={styles.selectors}>*/}
            {/*    <ul>*/}
            {/*        {obj.types.map((typeID, index) => (*/}
            {/*            <li*/}
            {/*                onClick={() => setActiveType(typeID)}*/}
            {/*                key={typeID}*/}
            {/*                className={activeType === index ? styles.active : ""}*/}
            {/*            >*/}
            {/*                {types[typeID]}*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*    <ul>*/}
            {/*        {obj.sizes.map((size, index) => (*/}
            {/*            <li*/}
            {/*                onClick={() => setActiveSize(index)}*/}
            {/*                key={index}*/}
            {/*                className={activeSize === index ? styles.active : ""}*/}
            {/*            >*/}
            {/*                {size} см.*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*</div>*/}
            {/*<div className={styles.bottom}>*/}
            {/*    <div className={styles.pizzaBlock_price}>от {obj.price} ₽</div>*/}

            {/*    <button onClick={addButtonHandler} className={styles.pizzaBlock_button}>*/}
            {/*        <svg*/}
            {/*            width="12"*/}
            {/*            height="12"*/}
            {/*            viewBox="0 0 12 12"*/}
            {/*            fill="white"*/}
            {/*            xmlns="http://www.w3.org/2000/svg"*/}
            {/*        >*/}
            {/*            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" />*/}
            {/*        </svg>*/}
            {/*        <span>Добавить</span>*/}
            {/*        {foundItem === undefined ? "" : <i>{foundItem.count}</i>}*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    );
};

export default PizzaBlock;