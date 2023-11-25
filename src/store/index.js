import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from "./slice/allProductsSlice";
import categoryReducer from "./slice/categorySlice";
import cartReducer from "./slice/cartSlice";

export const store = configureStore({
    reducer: {
        allProducts: allProductsReducer,
        category: categoryReducer,
        cart: cartReducer
    }
})