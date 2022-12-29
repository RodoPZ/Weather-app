import React, { useEffect, useContext, useState } from "react";
import { TempMiniCard } from "../TempMiniCard/TempMiniCard";
import { AppContext } from "../../context";
import { Hour } from "../../models/Forecast.model";
import "./index.scss";
import { changeTempUnits } from "../../utils/changeTempUnits";

export const TempGraphic = () => {
  const context = useContext(AppContext);
  const [hourlist, setHourlist] = useState<Hour[]>([...Array(24)]);
  const [tempLocation, setTempLocation] = useState({ min: 0, max: 10 });

  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  useEffect(() => {
    if (context.loaded) {
      const response = context.data!;
      const forecastByHour = response.forecast.forecastday[context.day].hour;
      setHourlist(forecastByHour);

      const listOfTemps = forecastByHour.map((hour) =>
        changeTempUnits({
          unit: context.tempUnit,
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
  }, [context.loaded, context.day, context.tempUnit]);

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
                      unit: context.tempUnit,
                      c_value: hour.temp_c,
                      f_value: hour.temp_f,
                    })
                  : 0
              }
              rain={hour ? hour.chance_of_rain : 0}
              wind={
                hour
                  ? changeTempUnits({
                      unit: context.tempUnit,
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
