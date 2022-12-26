import React, { useEffect, useContext } from "react";
import "./index.scss";
import { SearchBar } from "../SearchBar/SearchBar";
import { AppContext } from "../../context";

export const Navbar = () => {
  const context = useContext(AppContext);

  const response = context.data;

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
