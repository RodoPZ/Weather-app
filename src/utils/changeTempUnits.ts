import { UnitParams, unitType } from "../models/temperature.model";

interface changeTempUnitsParamTypes {
  unit: unitType;
  c_value: any;
  f_value: any;
  check_day?: {
    day: number;
    current_c_value: any;
    current_f_value: any;
  };
}
export const changeTempUnits = ({
  unit,
  c_value,
  f_value,
  check_day,
}: changeTempUnitsParamTypes) => {
  if (check_day) {
    if (check_day.day == 0) {
      return unit == UnitParams.C
        ? check_day.current_c_value
        : check_day.current_f_value;
    } else {
      return unit == UnitParams.C ? c_value : f_value;
    }
  } else {
    return unit == UnitParams.C ? c_value : f_value;
  }
};
