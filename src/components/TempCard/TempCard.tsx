import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Icon } from "../Icon/Icon";
import { IconTypes } from "../../models/Icon.model";
import { AppContext } from "../../context";

export const TempCard = () => {
  const context = useContext(AppContext);
  const labels = {
    city: "City",
    region: "Region",
    time: "Time",
    date: "Date",
    temperature: 22,
    tempUnit: "Label",
    precipitation: 0,
    wind: 0.0,
    icon: "cdn.weatherapi.com/weather/64x64/day/116.png",
    alt: "Loading image",
  };

  const [Labels, setLabels] = useState(labels);

  useEffect(() => {
    if (context.loaded) {
      const response = context.data!;
      const location = response.location;
      const current = response.current;
      const forecastday = response.forecast.forecastday[context.day];
      const hour = parseInt(location.localtime.split(" ")[1].substring(0, 2));

      setLabels((Labels) => ({
        ...Labels,
        city: location.name,
        region: location.region,
        time: location.localtime.split(" ")[1],
        date: forecastday.hour[hour].time.split(" ")[0],
        temperature:
          context.day == 0 ? current.temp_c : forecastday.hour[hour].temp_c,
        tempUnit: "Cº",
        precipitation: forecastday.hour[hour].chance_of_rain,
        wind:
          context.day == 0 ? current.wind_kph : forecastday.hour[hour].wind_kph,
        icon: current.condition.icon,
        alt: current.condition.text,
      }));
    }
  }, [context.loaded, context.day]);

  return (
    <>
      <div className="tempCard">
        <p className="tempCard__title">
          {Labels.city + ", " + Labels.region + "."}
        </p>

        <div className="tempCard__mainSection">
          <div className="tempCard__leftSection">
            <p className="tempCard__time_label">{Labels.date}</p>
            <p className="tempCard__date_label">{Labels.time}</p>
            <div className="tempCard__temp_section">
              <p className="tempCard__temp_label">
                {Labels.temperature.toFixed(1)}
              </p>
              <p className="tempCard__tempUnit_label">{Labels.tempUnit}</p>
            </div>
          </div>
          <div className="tempCard__rightSection">
            <div className="tempCard__subSection_container">
              <div className="tempCard__subInfo">
                <Icon
                  className="tempCard__subIcon"
                  iconTypes={IconTypes.drop}
                />
                <p>{Labels.precipitation.toString() + " %"}</p>
              </div>
              <div className="tempCard__subInfo">
                <Icon
                  className="tempCard__subIcon"
                  iconTypes={IconTypes.wind}
                />
                <p>{Labels.wind.toString() + " kph"} </p>
              </div>
            </div>
            <img
              className="tempCard__Icon"
              src={Labels.icon}
              alt={Labels.alt}
            />
          </div>
        </div>
      </div>
    </>
  );
};
