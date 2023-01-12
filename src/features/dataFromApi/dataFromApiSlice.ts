import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Forecast } from "../../models/Forecast.model";

export interface dataFromApiType {
  value: Forecast | null;
  loaded: boolean;
}
const initialState: dataFromApiType = {
  value: null,
  loaded: false,
};

export const dataFromApiSlice = createSlice({
  name: "dataFromApi",
  initialState,
  reducers: {
    changeData: (state, action: PayloadAction<Forecast>) => {
      state.value = action.payload;
      state.loaded = true;
    },
    loadedToFalse: (state) => {
      state.loaded = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeData, loadedToFalse } = dataFromApiSlice.actions;

export default dataFromApiSlice.reducer;
