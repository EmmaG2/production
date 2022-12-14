import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { entriesSlice } from "./reducers/entries";
import { uiSlice } from "./reducers/ui";

// redux
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const persistConfig = {
  key: "uiState",
  storage,
  whitelist: [`${uiSlice.name}`],
};

const rootReducers = combineReducers({
  [uiSlice.name]: uiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const makeStore = () =>
  configureStore({
    reducer: {
      [uiSlice.name]: persistedReducer,
      [entriesSlice.name]: entriesSlice.reducer,
    },
    middleware: [thunk],
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
