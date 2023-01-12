import { createSlice } from "@reduxjs/toolkit";

import { HYDRATE } from "next-redux-wrapper";
import { Entry } from "../../../interfaces";
import { AppState } from "../../store";

import { v4 as uuidv4 } from "uuid";

interface entriesState {
  entries: Entry[]; // todo: falta el tipo de dato
}

const date = new Date();
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];

const initialState: entriesState = {
  entries: [
    {
      _id: uuidv4(),
      createdAt: `${year}/${month}/${day} - ${hour}:${minutes}:${seconds}`,
      description: "lorem ipsum dolor sit asimet",
      status: "pending",
    },
    {
      _id: uuidv4(),
      createdAt: `${year}/${month}/${day} - ${hour}:${minutes}:${seconds}`,
      description: "lorem ipsum ",
      status: "in-progress",
    },
    {
      _id: uuidv4(),
      createdAt: `${year}/${month}/${day} - ${hour}:${minutes}:${seconds}`,
      description: "lorem ipsum ",
      status: "finished",
    },
  ],
};

export const entriesSlice = createSlice({
  name: "entries",
  initialState,
  reducers: {
    addEntry: (state, action) => {},
    deleteEntry: (state, action) => {},
    updateEntry: (state, action) => {},
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

export const { addEntry: reducerName } = entriesSlice.actions;
export const selectEntriesState = (state: AppState) => state.entries;
