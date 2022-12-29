import React, { useEffect, useState, useContext } from "react";
import { TextButton } from "../TextButton/TextButton";
import "./index.scss";
import { AppContext } from "../../context";

export const DayMenu = () => {
  const context = useContext(AppContext);
  const dayListTemplate = ["Hoy", "Label", "Label"];
  const [days, setDays] = useState(dayListTemplate);

  useEffect(() => {
    if (context.loaded) {
      const response = context.data!;
      const list = response.forecast.forecastday;
      const dayList = list.map((item, index) => {
        const dateUTC = new Date(item.date);
        dateUTC.setMinutes(dateUTC.getMinutes() + dateUTC.getTimezoneOffset());
        return index === 0
          ? "Hoy"
          : Intl.DateTimeFormat("es-MX", {
              weekday: "long",
            }).format(dateUTC);
      });
      setDays(dayList);
    }
  }, [context.loaded]);

  return (
    <>
      <div className="dayMenu">
        {days.map((day, index) => (
          <TextButton
            index={index}
            selected={index == context.day ? true : false}
            key={index}
          >
            {day}
          </TextButton>
        ))}
      </div>
    </>
  );
};
