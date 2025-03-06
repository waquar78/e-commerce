// store.js
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer.js";

// Correctly import reducers
import { getProductReducer, getProductDetailsReducer } from "./reducers/productReducer.js";

const store = configureStore({
  reducer: {
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Optional: To avoid non-serializable warnings
    }),
});

export default store;
