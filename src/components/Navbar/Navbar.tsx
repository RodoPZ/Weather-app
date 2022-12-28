import React, { useContext } from "react";
import "./index.scss";
import { SearchBar } from "../SearchBar/SearchBar";
import { AppContext } from "../../context";
import { UnitParams } from "../../models/temperature.model";
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
            src="../../src/assets/Logo.png"
            alt="navigate to default"
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
