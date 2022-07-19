import {
  AnyAction,
  AsyncThunk,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { CartItem, ICartState, IReceivedCartData } from "../interfaces&types";

const initialState: ICartState = {
  amount: 0,
  totalPrice: 0,
  items: [],
  isLoading: false,
  error: "",
};

const toCompare = (a: CartItem, b: CartItem) => {
  return a.title === b.title && a.type === b.type && a.size === b.size;
};

export const fetchCartItems = createAsyncThunk<IReceivedCartData>(
  "cart/fetchCartItems",

  async () => {
    const response = await axios
      .get("https://62a08573a9866630f8112416.mockapi.io/orders")
      .catch();

    return response.data as IReceivedCartData;
  }
);

export const addToCart = createAsyncThunk<
  CartItem,
  CartItem,
  { state: { cart: ICartState } }
>(
  "cart/addToCart",

  (item, { getState }) => {
    const foundItem = getState().cart.items.find((obj) => toCompare(obj, item));

    if (foundItem) {
      axios
        .put(
          `https://62a08573a9866630f8112416.mockapi.io/orders/${foundItem.id}`,
          { count: 1 + foundItem.count }
        )
        .catch((error) => {
          return error;
        });
      return { ...foundItem, count: 1 + foundItem.count } as CartItem;
    } else {
      axios.post(`https://62a08573a9866630f8112416.mockapi.io/orders`, item);
      return {
        ...item,
        id:
          getState().cart.items.length === 0
            ? "1"
            : (
                Number(
                  getState().cart.items[getState().cart.items.length - 1].id
                ) + 1
              ).toString(),
      } as CartItem;
    }
  }
);

export const deleteAllItems = createAsyncThunk(
  "cart/deleteAllItems",

  () => {
    if (window.confirm("Do you really want to remove the selected items?")) {
      axios
        .delete("https://62a08573a9866630f8112416.mockapi.io/orders")
        .catch((error) => {
          return error;
        });
    }
  }
);

export const incrementItem = createAsyncThunk<CartItem, CartItem>(
  "cart/incrementItem",
  (item) => {
    axios
      .put(`https://62a08573a9866630f8112416.mockapi.io/orders/${item.id}`, {
        count: 1 + item.count,
      })
      .catch((error) => {
        return error;
      });

    return item as CartItem;
  }
);

export const decrementItem = createAsyncThunk<
  CartItem,
  CartItem,
  { state: { cart: ICartState } }
>("cart/decrementItem", (item, { getState }) => {
  const foundItem = getState().cart.items.find((obj) => toCompare(obj, item));

  if (foundItem && foundItem.count > 1) {
    axios
      .put(`https://62a08573a9866630f8112416.mockapi.io/orders/${item.id}`, {
        count: item.count - 1,
      })
      .catch((error) => {
        return error;
      });
  }

  return item as CartItem;
});

export const deleteItem = createAsyncThunk<CartItem, CartItem>(
  "cart/deleteItem",
  (item) => {
    axios
      .delete(`https://62a08573a9866630f8112416.mockapi.io/orders/${item.id}`)
      .catch((error) => {
        return error;
      });

    return item;
  }
);

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.amount = 0;
        state.totalPrice = 0;
        state.isLoading = false;
        state.items = action.payload.items;

        state.items.forEach((item) => {
          state.amount += item.count;
        });

        state.items.forEach((item) => {
          state.totalPrice += item.price * item.count;
        });
      })

      .addCase(addToCart.fulfilled, (state, action) => {
        state.amount = 0;
        state.totalPrice = 0;
        state.isLoading = false;

        const foundItem = state.items.find((item) =>
          toCompare(item, action.payload)
        );

        if (foundItem) {
          state.items[state.items.indexOf(foundItem)] = action.payload;
        } else {
          state.items.push(action.payload);
        }

        state.items.forEach((item) => {
          state.amount += item.count;
        });

        state.items.forEach((item) => {
          state.totalPrice += item.price * item.count;
        });
      })

      .addCase(incrementItem.fulfilled, (state, action) => {
        state.amount = 0;
        state.totalPrice = 0;
        state.isLoading = false;

        const foundItem = state.items.find((item) =>
          toCompare(item, action.payload)
        );

        if (foundItem) {
          foundItem.count++;
        }

        state.items.forEach((item) => {
          state.amount += item.count;
        });

        state.items.forEach((item) => {
          state.totalPrice += item.price * item.count;
        });
      })

      .addCase(decrementItem.fulfilled, (state, action) => {
        state.amount = 0;
        state.totalPrice = 0;
        state.isLoading = false;

        const foundItem = state.items.find((item) =>
          toCompare(item, action.payload)
        );

        if (foundItem && foundItem.count > 1) {
          foundItem.count--;
        }

        state.items.forEach((item) => {
          state.amount += item.count;
        });

        state.items.forEach((item) => {
          state.totalPrice += item.price * item.count;
        });
      })

      .addCase(deleteItem.fulfilled, (state, action) => {
        state.isLoading = false;

        const foundItem = state.items.find((item) =>
          toCompare(item, action.payload)
        );

        if (foundItem) {
          state.items.splice(state.items.indexOf(foundItem), 1);
        }
      })

      .addMatcher(isPendingAction, (state) => {
        state.isLoading = true;
        state.error = "";
      })

      .addMatcher(isRejectedAction, (state, action) => {
        state.isLoading = false;

        if (axios.isAxiosError(action.payload)) {
          state.error = action.payload.message;
        } else {
          state.error = "Connection error :(";
        }
      });
  },
});

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;

function isPendingAction(action: AnyAction): action is PendingAction {
  return action.type.endsWith("/pending");
}

function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith("/rejected");
}

export default CartSlice.reducer;
