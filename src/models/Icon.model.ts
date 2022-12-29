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
  upArrow,
}
export interface propTypes {
  iconTypes: IconTypes;
  fill?: string;
  className: string;
}
