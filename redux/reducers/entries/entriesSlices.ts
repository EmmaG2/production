import { createSlice } from "@reduxjs/toolkit";

import { HYDRATE } from "next-redux-wrapper";

interface entriesState {
  hola?: string;
}

const initialState: entriesState = {};

export const entriesSlice = createSlice({
  name: "entries",
  initialState,
  reducers: {
    reducerName: (state, action) => {},
  },
  extraReducers: (buider) => {
    buider.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action,
      };
    });
  },
});

export const { reducerName } = entriesSlice.actions;
