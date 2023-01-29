import { Forecast } from "../models/Forecast.model";
import { Search } from "../models/Search.model";
import {
  searchParametersTypes,
  forecastParametersTypes,
  timeframeTypes,
} from "../models/apiParams.model";
import { Error } from "../models/error.model";

export class api {
  static url = "/.netlify/functions/fetch-weather";
  static async forecast({
    location,
    days,
    airquality = "no",
    alerts = "no",
  }: forecastParametersTypes) {
    const response = await fetch(
      `${this.url}?selection=${timeframeTypes.forecast}&location=${location}&days=${days}&airquality=${airquality}&alerts=${alerts}`
    );
    const data = await response.json();
    const ForecastDat: Forecast & Error = data.data;
    return ForecastDat;
  }

  static async search({ location }: searchParametersTypes) {
    const response = await fetch(
      `${this.url}?selection=${timeframeTypes.search}&location=${location}`
    );
    const data = await response.json();
    const searchData: Search[] = data.data;
    return searchData;
  }
}
