import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface searchModeType {
  value: boolean;
}
const initialState: searchModeType = {
  value: false,
};

export const searchModeSlice = createSlice({
  name: "searchMode",
  initialState,
  reducers: {
    activate: (state) => {
      state.value = true;
    },
    deactivate: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { activate, deactivate } = searchModeSlice.actions;

export default searchModeSlice.reducer;
