import { configureStore } from "@reduxjs/toolkit";
import dishReducer from "./DishesSlice";

export const store = configureStore({
  reducer: {
    dishes: dishReducer,
  },
});
