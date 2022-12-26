import React, { createContext, useState } from "react";
import { Forecast } from "./models/apiResponse.model";

interface Props {
  children: JSX.Element;
}

export interface AppContextInterface {
  loaded: boolean;
  changeLoaded: Function;
  data: Forecast | null;
  changeData: Function;
  day: number;
  changeIndex: Function;
}
const valueTemplate = {
  loaded: false,
  changeLoaded: () => {},
  data: null,
  day: 0,
  changeData: () => {},
  changeIndex: () => {},
};

export const AppContext = createContext<AppContextInterface>(valueTemplate);

export const AppProvider = ({ children }: Props) => {
  const [day, setDay] = useState(0);
  const [data, setData] = useState<null | Forecast>(null);
  const [loaded, setLoaded] = useState(false);

  const value = {
    loaded,
    changeLoaded: (isLoaded: boolean) => {
      setLoaded(isLoaded);
    },
    data,
    day,
    changeData: (response: Forecast) => {
      setData(response);
    },
    changeIndex: (index: number) => {
      setDay(index);
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
