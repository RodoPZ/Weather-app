import React from "react";
import "./index.scss";
interface propTypes {
  children: string;
}

export const TextButton = ({ children }: propTypes) => {
  return (
    <>
      <button type="button" className={"textButton"}>
        <p className="textButton__label">{children}</p>
      </button>
    </>
  );
};
