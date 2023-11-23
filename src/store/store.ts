import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Root/rootSlice";

export const store = configureStore({
  reducer: { root: rootReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
