import React, { useEffect } from "react";
import "./index.scss";
import { SearchBar } from "../SearchBar/SearchBar";
import { api } from "../../utils/fetchFromApi";
import { Forecast } from "../../models/apiResponse.model";

interface Props {
  data: Forecast | null;
}

export const Navbar = ({ data }: Props) => {
  const response = data;
  useEffect(() => {}, [data]);

  return (
    <>
      <div className="navbar">
        <img className="navbar__logo" src="../../src/assets/Logo.png" alt="" />
        <SearchBar />
        <p className="navbar__label">EN/ES</p>
      </div>
    </>
  );
};
