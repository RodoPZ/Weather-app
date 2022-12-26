import React, { useRef } from "react";
import { Icon } from "../Icon/Icon";
import { IconTypes } from "../../models/Icon.model";
import "./index.scss";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const refContainer = useRef(null);
  let navigate = useNavigate();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/${refContainer.current.value}`);
    }
  };

  return (
    <>
      <div className="searchBar">
        <input
          onKeyDown={handleKeyDown}
          ref={refContainer}
          className="searchBar__field"
          type="text"
          placeholder="Buscar..."
        />
        <Icon className="searchBar__icon" iconTypes={IconTypes.search} />
      </div>
    </>
  );
};
