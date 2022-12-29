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

export type airqualityTypes = "yes" | "no";

export interface currentParametersTypes {
  location: string;
  airquality?: airqualityTypes;
}

export interface searchParametersTypes {
  location: string;
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
