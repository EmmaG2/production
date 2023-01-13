import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { HYDRATE } from "next-redux-wrapper";
import { EntriesState, Entry } from "../../../interfaces";
import { AppState } from "../../store";

import { v4 as uuidv4 } from "uuid";
import { addZero } from "../../../utils";

interface entriesState {
  entries: Entry[]; // todo: falta el tipo de dato
}

// const date = new Date();

// let [month, day, year] = [date.getMonth(), date.getDay(), date.getFullYear()];
// let [hour, minutes, seconds] = [
//   date.getHours(),
//   date.getMinutes(),
//   date.getSeconds(),
// ];

// month = month + 1;

const initialState: entriesState = {
  entries: [],
};

export const entriesSlice = createSlice({
  name: "entries",
  initialState,
  reducers: {
    addEntry: (state, { payload }) => {
      const date = new Date();

      const [month, day, year] = [
        date.getMonth() + 1,
        date.getDay(),
        date.getFullYear(),
      ];
      const [hour, minutes, seconds] = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
      ];

      state.entries.push({
        _id: uuidv4(),
        createdAt: `${addZero(year)}/${addZero(month)}/${addZero(
          day
        )} - ${hour}:${minutes}:${seconds}`,
        description: payload,
        status: "pending",
      });
    },
    updateEntry: (state, action: PayloadAction<Entry>) => {
      const entryIndex =
        state.entries.findIndex((e) => e._id === action.payload._id) || 0;
      if (entryIndex >= 0) {
        state.entries[entryIndex].status = action.payload.status;
      }
    },
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

export const { addEntry, updateEntry } = entriesSlice.actions;
export const selectEntriesState = (state: AppState) =>
  state.appliactionState.entries;
