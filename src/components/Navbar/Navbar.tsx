import React, { useContext } from "react";
import "./index.scss";
import { SearchBar } from "../SearchBar/SearchBar";
import { UnitParams } from "../../models/temperature.model";
import { useSelector, useDispatch } from "react-redux";
import { changetoC, changetoF } from "../../features/tempUnits/tempUnitSlice";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
const imgUrl = new URL("assets/Logo.png", import.meta.url).href;

export const Navbar = () => {
  const tempUnit = useSelector((state: RootState) => state.tempUnit.value);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onClick = () => {
    tempUnit == UnitParams.F ? dispatch(changetoC()) : dispatch(changetoF());
  };
  return (
    <>
      <div className="navbar">
        <img
          onClick={() => navigate("/")}
          className="navbar__logo"
          src={imgUrl}
          alt="navigate to homepage"
        />
        <SearchBar />
        <p onClick={onClick} className="navbar__label">
          {tempUnit}
        </p>
      </div>
    </>
  );
};
