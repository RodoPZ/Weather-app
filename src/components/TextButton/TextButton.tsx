import React, { useContext } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { changeDay } from "../../features/daySelector/daySelectorSlice";

interface propTypes {
  children: string;
  selected: boolean;
  index: number;
}

export const TextButton = ({ children, selected, index }: propTypes) => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => dispatch(changeDay(index))}
        type="button"
        className={`textButton ${selected ? "textButton__selected" : ""}`}
      >
        <p className="textButton__label">{children}</p>
      </button>
    </>
  );
};
