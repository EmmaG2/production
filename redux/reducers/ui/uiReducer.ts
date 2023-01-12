// export const { toggleTheme } = uiSlice.actions;
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../../store";

// Type for our state
export interface uiSate {
  theme: boolean;
  sidebar: boolean;
  isAdding: boolean;
}

// Initial state
const initialState: uiSate = {
  theme: true,
  sidebar: false,
  isAdding: false,
};

// Actual Slice
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleUiState(state) {
      state.theme = !state.theme;
    },
    toggleSidebar(state) {
      state.sidebar = !state.sidebar;
    },
    toggleIsAdding(state) {
      state.isAdding = !state.isAdding;
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

export const { toggleUiState, toggleSidebar, toggleIsAdding } = uiSlice.actions;

export const selectUiState = (state: AppState) => state.appliactionState.ui;
