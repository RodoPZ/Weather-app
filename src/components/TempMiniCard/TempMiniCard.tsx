import React, { useEffect, useContext, useState } from "react";
import { Icon } from "../Icon/Icon";
import { IconTypes } from "../../models/Icon.model";
import "./index.scss";
import { changeTempUnits } from "../../utils/changeTempUnits";
import { useSelector, useDispatch } from "react-redux";
import { changetoC, changetoF } from "../../features/tempUnits/tempUnitSlice";
import { RootState } from "../../store";

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
  id: number;
  selected: boolean;
}

export const TempMiniCard = ({
  time,
  temp,
  rain,
  wind,
  icon,
  tempLocation,
  alt,
  id,
  selected,
}: Props) => {
  const tempUnit = useSelector((state: RootState) => state.tempUnit.value);
  const loaded = useSelector((state: RootState) => state.dataFromApi.loaded);
  const dispatch = useDispatch();
  const [tempPadding, setPadding] = useState({
    paddingBottom: 0,
    paddingTop: 100,
  });

  useEffect(() => {
    if (loaded) {
      const bottom =
        (temp - tempLocation.min) *
        (100 / (tempLocation.max - tempLocation.min));
      const top = 100 - bottom;

      setPadding((tempPadding) => ({
        ...tempPadding,
        paddingBottom: bottom,
        paddingTop: top,
      }));
    }
  }, [loaded, temp, tempUnit]);

  return (
    <div
      className={`tempMiniCard ${selected && "tempMiniCard--selected"}`}
      id={"tempMiniCard" + id.toString()}
    >
      <p className="tempMiniCard__timeLabel">
        <b>{time.substring(0, 2)}</b>
        {":" + time.substring(3, 5)}
      </p>
      <div
        className="tempMiniCard__temp"
        style={{
          padding: `${tempPadding.paddingTop}px 0px ${tempPadding.paddingBottom}px`,
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
          {wind.toFixed(1) +
            changeTempUnits({
              unit: tempUnit,
              c_value: " kph",
              f_value: " mph",
            })}
        </p>
      </div>
    </div>
  );
};
