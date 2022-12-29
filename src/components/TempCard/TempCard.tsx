import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Icon } from "../Icon/Icon";
import { IconTypes } from "../../models/Icon.model";
import { AppContext } from "../../context";
import { changeTempUnits } from "../../utils/changeTempUnits";

export const TempCard = () => {
  const context = useContext(AppContext);
  const labelTemplate = {
    city: "City",
    region: "Region",
    time: "Time",
    date: "Date",
    temperature: 22,
    tempUnit: "Label",
    windUnit: "Label",
    precipitation: 0,
    wind: 0.0,
    icon: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
    alt: "Loading image",
  };

  const [labels, setLabels] = useState(labelTemplate);

  useEffect(() => {
    if (context.loaded) {
      const response = context.data!;
      const location = response.location;
      const current = response.current;
      const forecastday = response.forecast.forecastday[context.day];

      const hour = parseInt(location.localtime.split(" ")[1].substring(0, 2));
      const newDate = new Date(forecastday.hour[hour].time);
      const newDateList = newDate.toUTCString().split(" ");

      setLabels((labels) => ({
        ...labels,
        city: location.name,
        region: location.region,
        time: location.localtime.split(" ")[1],
        date: `${newDateList[1]} ${newDateList[2]} ${newDateList[3]}`,
        temperature: changeTempUnits({
          unit: context.tempUnit,
          c_value: forecastday.hour[hour].temp_c,
          f_value: forecastday.hour[hour].temp_f,
          check_day: {
            day: context.day,
            current_c_value: current.temp_c,
            current_f_value: current.temp_f,
          },
        }),

        tempUnit: changeTempUnits({
          unit: context.tempUnit,
          c_value: "Cº",
          f_value: "Fº",
        }),
        windUnit: changeTempUnits({
          unit: context.tempUnit,
          c_value: "kph",
          f_value: "mph",
        }),
        precipitation: forecastday.hour[hour].chance_of_rain,
        wind: changeTempUnits({
          unit: context.tempUnit,
          c_value: forecastday.hour[hour].wind_kph,
          f_value: forecastday.hour[hour].wind_mph,
          check_day: {
            day: context.day,
            current_c_value: current.wind_kph,
            current_f_value: current.wind_mph,
          },
        }),
        icon: current.condition.icon,
        alt: current.condition.text,
      }));
    }
  }, [context.loaded, context.day, context.tempUnit]);

  return (
    <>
      <div className="tempCard">
        <p className="tempCard__title">
          {labels.city + ", " + labels.region + "."}
        </p>

        <div className="tempCard__mainSection">
          <div className="tempCard__leftSection">
            <p className="tempCard__time_label">{labels.date}</p>
            <p className="tempCard__date_label">{labels.time}</p>
            <div className="tempCard__temp_section">
              <p className="tempCard__temp_label">
                {labels.temperature.toFixed(1)}
              </p>
              <p className="tempCard__tempUnit_label">{labels.tempUnit}</p>
            </div>
          </div>
          <div className="tempCard__rightSection">
            <div className="tempCard__subSection_container">
              <div className="tempCard__subInfo">
                <Icon
                  className="tempCard__subIcon"
                  iconTypes={IconTypes.drop}
                />
                <p className="tempCard__subIcon_label">
                  {labels.precipitation.toString() + " %"}
                </p>
              </div>
              <div className="tempCard__subInfo">
                <Icon
                  className="tempCard__subIcon"
                  iconTypes={IconTypes.wind}
                />
                <p className="tempCard__subIcon_label">
                  {labels.wind.toString() + " " + labels.windUnit}
                </p>
              </div>
            </div>
            <img
              className="tempCard__Icon"
              src={labels.icon}
              alt={labels.alt}
            />
          </div>
        </div>
      </div>
    </>
  );
};
