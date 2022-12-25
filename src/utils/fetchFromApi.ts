const APIKEY = import.meta.env.VITE_API;
const Url = "https://api.weatherapi.com/v1/";
import { Forecast } from "../models/apiResponse.model";

import {
  astronomyParametersTypes,
  currentParametersTypes,
  forecastParametersTypes,
  timeframeTypes,
} from "../models/apiResponse.model";

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
    const data: Forecast = await response.json();
    return data;
  }

  static async search() {
    return await fetch(
      `${Url}${timeframeTypes.forecast}?key=${APIKEY}&q=${location}`
    );
  }

  static async astronomy({ date }: astronomyParametersTypes) {
    return await fetch(
      `${Url}${timeframeTypes.astronomy}?key=${APIKEY}&q=${location}&dt=${date}`
    );
  }
}
