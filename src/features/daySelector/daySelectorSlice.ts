import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface daySelectorType {
  value: number;
}
const initialState: daySelectorType = {
  value: 0,
};

export const daySelectorSlice = createSlice({
  name: "daySelector",
  initialState,
  reducers: {
    changeDay: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeDay } = daySelectorSlice.actions;

export default daySelectorSlice.reducer;
