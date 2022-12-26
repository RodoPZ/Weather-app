import React, { useEffect, useContext, useState } from "react";
import { Icon } from "../Icon/Icon";
import { IconTypes } from "../../models/Icon.model";
import { AppContext } from "../../context";
import "./index.scss";
interface Props {
  time: string;
  temp: number;
  rain: number;
  wind: number;
  icon: string;
  tempLocation: {
    min: number;
    max: number;
  };
  alt: string;
}

export const TempMiniCard = ({
  time,
  temp,
  rain,
  wind,
  icon,
  tempLocation,
  alt,
}: Props) => {
  const context = useContext(AppContext);
  const [paddingawa, setPadding] = useState({
    paddingabajo: 0,
    paddingarriba: 100,
    paddingcss: {
      container: {
        padding: "",
      } as React.CSSProperties,
    },
  });

  useEffect(() => {
    if (context.loaded) {
      const paddingabajo = (temp * 100) / tempLocation.max;
      const paddingarriba = 100 - paddingabajo;

      setPadding((paddingawa) => ({
        ...paddingawa,
        paddingabajo: paddingabajo,
        paddingarriba: paddingarriba,
      }));
    }
  }, [context.loaded, temp]);

  return (
    <div className="tempMiniCard">
      <p className="tempMiniCard__timeLabel">
        <b>{time.substring(0, 2)}</b>
        {":" + time.substring(3, 5)}
      </p>
      <div
        className="tempMiniCard__temp"
        style={{
          padding: `${paddingawa.paddingarriba}px 0px ${paddingawa.paddingabajo}px`,
        }}
      >
        <img src={icon} className={"tempMiniCard__sunIcon"} alt={alt} />
        <p className="tempMiniCard__sunLabel">{temp}</p>
      </div>
      <div className="tempMiniCard__rainWind">
        <Icon
          className={"tempMiniCard__rainWindIcon"}
          iconTypes={IconTypes.drop}
        />
        <p className="tempMiniCard__rainWindLabel">{rain + " %"}</p>
      </div>
      <div className="tempMiniCard__rainWind">
        <Icon
          className={"tempMiniCard__rainWindIcon"}
          iconTypes={IconTypes.wind}
        />
        <p className="tempMiniCard__rainWindLabel">
          {wind.toFixed(1) + " kph"}
        </p>
      </div>
    </div>
  );
};
