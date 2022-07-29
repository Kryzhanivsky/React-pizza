import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, ICartState } from "../interfaces&types";

const initialState: ICartState = {
  amount: 0,
  totalPrice: 0,
  items: [],
};

const toCompare = (a: CartItem, b: CartItem) => {
  return a.title === b.title && a.type === b.type && a.size === b.size;
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchCartItems: (state) => {
      const json = localStorage.getItem("cartItems");

      if (json) {
        state.items = JSON.parse(json);

        state.totalPrice = 0;
        state.amount = 0;

        state.items.forEach((item) => {
          state.totalPrice += item.price * item.count;
          state.amount += item.count;
        });
      } else {
        localStorage.setItem("cartItems", JSON.stringify([]));
      }
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const foundItem = state.items.find((item) =>
        toCompare(item, action.payload)
      );

      if (foundItem) {
        foundItem.count++;
      } else {
        state.items.push(action.payload);
      }

      state.totalPrice = 0;
      state.amount = 0;

      state.items.forEach((item) => {
        state.totalPrice += item.price * item.count;
        state.amount += item.count;
      });

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    increment: (state, action: PayloadAction<CartItem>) => {
      const foundItem = state.items.find((item) =>
        toCompare(item, action.payload)
      );

      if (foundItem) {
        foundItem.count++;
        state.amount += 1;
        state.totalPrice += foundItem.price;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    decrement: (state, action: PayloadAction<CartItem>) => {
      const foundItem = state.items.find((item) =>
        toCompare(item, action.payload)
      );

      if (foundItem && foundItem.count > 1) {
        foundItem.count--;
        state.amount -= 1;
        state.totalPrice -= foundItem.price;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    deleteItem: (state, action: PayloadAction<CartItem>) => {
      const foundItem = state.items.find((item) =>
        toCompare(item, action.payload)
      );

      if (foundItem) {
        state.items.splice(state.items.indexOf(foundItem), 1);
        state.amount -= foundItem.count;
        state.totalPrice -= foundItem.price * foundItem.count;

        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },
    deleteAllItems: (state) => {
      state.items = [];
      state.amount = 0;
      state.totalPrice = 0;
      localStorage.clear();
    },
  },
});

export const {
  addToCart,
  increment,
  decrement,
  deleteItem,
  deleteAllItems,
  fetchCartItems,
} = CartSlice.actions;

export default CartSlice.reducer;
