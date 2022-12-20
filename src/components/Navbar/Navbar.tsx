import React from "react";
import "./index.scss";
import { SearchBar } from "../SearchBar/SearchBar";
export const Navbar = () => {
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
