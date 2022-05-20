import { configureStore } from "@reduxjs/toolkit";
import authSlices from "./auth-slice";
import  cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
 
const store = configureStore({
    reducer: {
        auth: authSlices.reducer,
        cart: cartSlice.reducer,
        ui: uiSlice.reducer,
    },
});

export default store