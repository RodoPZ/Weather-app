import React, { useEffect, useState, useContext } from "react";
import { TextButton } from "../TextButton/TextButton";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

export const DayMenu = () => {
  const data = useSelector((state: RootState) => state.dataFromApi.value);
  const loaded = useSelector((state: RootState) => state.dataFromApi.loaded);
  const dayState = useSelector((state: RootState) => state.daySelector.value);
  const dispatch = useDispatch();

  const dayListTemplate = ["Hoy", "Label", "Label"];
  const [days, setDays] = useState(dayListTemplate);

  useEffect(() => {
    if (loaded) {
      const response = data!;
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
  }, [loaded]);

  return (
    <>
      <div className="dayMenu">
        {days.map((day, index) => (
          <TextButton
            index={index}
            selected={index == dayState ? true : false}
            key={index}
          >
            {day}
          </TextButton>
        ))}
      </div>
    </>
  );
};
