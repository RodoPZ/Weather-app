export enum IconTypes {
  github,
  rain,
  web,
  linkedin,
  search,
  drop,
  wind,
  sun,
  moon,
}
export interface propTypes {
  iconTypes: IconTypes;
  fill?: string;
  className: string;
}
