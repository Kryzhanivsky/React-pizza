import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from "./Slices/CatalogSlice";
import cartReducer from "./Slices/CartSlice";

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        cart: cartReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch