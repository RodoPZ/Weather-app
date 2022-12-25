export enum timeframeTypes {
  current = "current.json",
  forecast = "forecast.json",
  search = "search.json",
  history = "history.json",
  future = "future.json",
  time_zone = "timezone.json",
  astronomy = "astronomy.json",
  ip = "ip.json",
}

export enum langTypes {
  esp = "es",
  en = "en",
}

type airqualityTypes = "yes" | "no";

export interface currentParametersTypes {
  location: string;
  airquality?: airqualityTypes;
}

export interface forecastParametersTypes {
  location: string;
  days: number;
  airquality?: airqualityTypes;
  alerts?: "yes" | "no";
}

export interface astronomyParametersTypes {
  date: string;
}
export interface Forecast {
  location: Location;
  current: Current;
  forecast: ForecastClass;
}

export interface Current {
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  precip_mm: number;
  precip_in: number;
  uv: number;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface ForecastClass {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: Date;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
}

export interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
}

export interface Day {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  daily_chance_of_rain: number;
  condition: Condition;
}

export interface Hour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  precip_mm: number;
  precip_in: number;
  chance_of_rain: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}
