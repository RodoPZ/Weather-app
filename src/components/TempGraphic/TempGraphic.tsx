import React, { useEffect, useContext, useState } from "react";
import { TempMiniCard } from "../TempMiniCard/TempMiniCard";
import { Hour } from "../../models/Forecast.model";
import "./index.scss";
import { changeTempUnits } from "../../utils/changeTempUnits";
import { useSelector, useDispatch } from "react-redux";
import { changetoC, changetoF } from "../../features/tempUnits/tempUnitSlice";
import { RootState } from "../../store";

export const TempGraphic = () => {
  const tempUnit = useSelector((state: RootState) => state.tempUnit.value);
  const data = useSelector((state: RootState) => state.dataFromApi.value);
  const loaded = useSelector((state: RootState) => state.dataFromApi.loaded);
  const day = useSelector((state: RootState) => state.daySelector.value);
  const dispatch = useDispatch();
  const [hourlist, setHourlist] = useState<Hour[]>([...Array(24)]);
  const [tempLocation, setTempLocation] = useState({ min: 0, max: 10 });

  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  useEffect(() => {
    if (loaded) {
      const response = data!;
      const forecastByHour = response.forecast.forecastday[day].hour;
      setHourlist(forecastByHour);

      const listOfTemps = forecastByHour.map((hour) =>
        changeTempUnits({
          unit: tempUnit,
          c_value: hour.temp_c,
          f_value: hour.temp_f,
        })
      );
      setTempLocation((tempLocation) => ({
        ...tempLocation,
        min: Math.min(...listOfTemps),
        max: Math.max(...listOfTemps),
      }));
    }
  }, [loaded, day, tempUnit]);

  useEffect(() => {
    const card = document.getElementById(
      "tempMiniCard" + currentHour.toString()
    );
    card?.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
  }, []);
  return (
    <>
      <div className="tempgraphic">
        {hourlist.map((hour, index) => {
          return (
            <TempMiniCard
              selected={currentHour == index}
              id={index}
              tempLocation={tempLocation}
              key={index}
              time={hour ? hour.time.split(" ")[1] : "00:00"}
              temp={
                hour
                  ? changeTempUnits({
                      unit: tempUnit,
                      c_value: hour.temp_c,
                      f_value: hour.temp_f,
                    })
                  : 0
              }
              rain={hour ? hour.chance_of_rain : 0}
              wind={
                hour
                  ? changeTempUnits({
                      unit: tempUnit,
                      c_value: hour.wind_kph,
                      f_value: hour.wind_mph,
                    })
                  : 0
              }
              icon={hour ? hour.condition.icon : ""}
              alt={hour ? hour.condition.text : ""}
            />
          );
        })}
      </div>
    </>
  );
};
