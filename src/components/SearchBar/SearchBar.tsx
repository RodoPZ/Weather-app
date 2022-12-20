import React from "react";
import { Icon } from "../Icon/Icon";
import { IconTypes } from "../../models/Icon.model";
import "./index.scss";

export const SearchBar = () => {
  return (
    <>
      <div className="searchBar">
        <input
          className="searchBar__field"
          type="text"
          placeholder="Buscar..."
        />
        <Icon className="searchBar__icon" iconTypes={IconTypes.search} />
      </div>
    </>
  );
};
