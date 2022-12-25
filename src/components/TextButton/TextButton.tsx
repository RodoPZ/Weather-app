import React, { useContext } from "react";
import "./index.scss";
import { AppContext } from "../../context";

interface propTypes {
  children: string;
  selected: boolean;
  index: number;
}

export const TextButton = ({ children, selected, index }: propTypes) => {
  const context = useContext(AppContext);

  return (
    <>
      <button
        onClick={() => context.changeIndex(index)}
        type="button"
        className={`textButton ${selected ? "textButton__selected" : ""}`}
      >
        <p className="textButton__label">{children}</p>
      </button>
    </>
  );
};
