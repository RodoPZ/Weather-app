import React, { useEffect, useContext, useState } from "react";
import { TempMiniCard } from "../TempMiniCard/TempMiniCard";
import { AppContext } from "../../context";
import { Hour } from "../../models/apiResponse.model";
import "./index.scss";

export const TempGraphic = () => {
  const context = useContext(AppContext);
  const [hourlist, setHourlist] = useState<Hour[]>([...Array(24)]);
  const [tempLocation, setTempLocation] = useState({ min: 0, max: 10 });

  useEffect(() => {
    if (context.loaded) {
      const response = context.data!;
      const forecastByHour = response.forecast.forecastday[context.day].hour;
      setHourlist(forecastByHour);

      const listOfTemps = forecastByHour.map((hour) => hour.temp_c);

      setTempLocation((tempLocation) => ({
        ...tempLocation,
        min: Math.min(...listOfTemps),
        max: Math.max(...listOfTemps),
      }));
    }
  }, [context.loaded, context.day]);

  return (
    <>
      <div className="tempgraphic">
        {hourlist.map((hour, index) => {
          return (
            <TempMiniCard
              tempLocation={tempLocation}
              key={index}
              time={hour ? hour.time.split(" ")[1] : "00:00"}
              temp={hour ? hour.temp_c : 0}
              rain={hour ? hour.chance_of_rain : 0}
              wind={hour ? hour.wind_kph : 0}
              icon={hour ? hour.condition.icon : ""}
              alt={hour ? hour.condition.text : ""}
            />
          );
        })}
      </div>
    </>
  );
};
