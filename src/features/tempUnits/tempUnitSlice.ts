import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UnitParams, unitType } from "../../models/temperature.model";

export interface tempUnitType {
  value: unitType;
}
const initialState: tempUnitType = {
  value: UnitParams.C,
};

export const tempUnitSlice = createSlice({
  name: "tempUnit",
  initialState,
  reducers: {
    changetoF: (state) => {
      state.value = UnitParams.F;
    },
    changetoC: (state) => {
      state.value = UnitParams.C;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changetoC, changetoF } = tempUnitSlice.actions;

export default tempUnitSlice.reducer;
