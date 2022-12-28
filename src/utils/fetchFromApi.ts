const APIKEY = import.meta.env.VITE_API;
const Url = "https://api.weatherapi.com/v1/";
import { Forecast } from "../models/Forecast.model";
import { Search } from "../models/Search.model";
import {
  searchParametersTypes,
  astronomyParametersTypes,
  currentParametersTypes,
  forecastParametersTypes,
  timeframeTypes,
} from "../models/apiParams.model";
import { Error } from "../models/error.model";

export class api {
  static async current({
    location,
    airquality = "no",
  }: currentParametersTypes) {
    const response = await fetch(
      `${Url}${timeframeTypes.current}?key=${APIKEY}&q=${location}&aqi=${airquality}`
    );
    const data = await response.json();
    return data;
  }

  static async forecast({
    location,
    days,
    airquality = "no",
    alerts = "no",
  }: forecastParametersTypes) {
    const response = await fetch(
      `${Url}${timeframeTypes.forecast}?key=${APIKEY}&q=${location}&days=${days}&aqi=${airquality}&alerts=${alerts}`
    );
    const data: Forecast & Error = await response.json();
    return data;
  }

  static async search({ location }: searchParametersTypes) {
    const response = await fetch(
      `${Url}${timeframeTypes.search}?key=${APIKEY}&q=${location}`
    );
    const data: Search[] = await response.json();
    return data;
  }

  static async astronomy({ date }: astronomyParametersTypes) {
    return await fetch(
      `${Url}${timeframeTypes.astronomy}?key=${APIKEY}&q=${location}&dt=${date}`
    );
  }
}
