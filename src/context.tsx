import React, { createContext, useState } from "react";

interface Props {
  children: JSX.Element;
}

export interface AppContextInterface {
  day: number;
  changeIndex: Function;
}

export const AppContext = createContext<AppContextInterface>({
  day: 0,
  changeIndex: () => {},
});

export const AppProvider = ({ children }: Props) => {
  const [day, setDay] = useState(0);
  const value = {
    day,
    changeIndex: (index: number) => {
      setDay(index);
    },
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
