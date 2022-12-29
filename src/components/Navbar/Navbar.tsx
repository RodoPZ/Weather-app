import React, { useContext } from "react";
import "./index.scss";
import { SearchBar } from "../SearchBar/SearchBar";
import { AppContext } from "../../context";
import { UnitParams } from "../../models/temperature.model";
const imgUrl = new URL("assets/Logo.png", import.meta.url).href;

export const Navbar = () => {
  const context = useContext(AppContext);
  const onClick = () => {
    context.tempUnit == UnitParams.F
      ? context.changeUnits(UnitParams.C)
      : context.changeUnits(UnitParams.F);
  };
  return (
    <>
      <div className="navbar">
        <a href="/London">
          <img
            className="navbar__logo"
            src={imgUrl}
            alt="navigate to homepage"
          />
        </a>

        <SearchBar />
        <p onClick={onClick} className="navbar__label">
          {context.tempUnit}
        </p>
      </div>
    </>
  );
};
