import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../../store";

export interface uiSate {
  theme: boolean;
  sidebar: boolean;
  isAdding: boolean;
  isDragging: boolean;
}

const initialState: uiSate = {
  theme: true,
  sidebar: false,
  isAdding: false,
  isDragging: false,
};

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
    toggleIsDragging(state) {
      state.isDragging = !state.isDragging;
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

export const {
  toggleUiState,
  toggleSidebar,
  toggleIsAdding,
  toggleIsDragging,
} = uiSlice.actions;

export const selectUiState = (state: AppState) => state.appliactionState.ui;
