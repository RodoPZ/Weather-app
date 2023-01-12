import React, { useContext, useState, MouseEvent } from "react";
import { Icon } from "../Icon/Icon";
import { IconTypes } from "../../models/Icon.model";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/fetchFromApi";
import { AutoComplete } from "../AutoComplete/AutoComplete";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { Search } from "../../models/Search.model";
import {
  activate,
  deactivate,
} from "../../features/searchMode/searchModeSlice";

export const SearchBar = () => {
  const searchMode = useSelector((state: RootState) => state.searchMode.value);
  const [results, setResults] = useState<Search[]>([]);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLInputElement;
    if (e.key === "Enter") {
      dispatch(deactivate());
      navigate(`/${target.value}`);
    } else if (e.key === "Escape") {
      dispatch(deactivate());
    }
  };

  const openAutocomplete = async (
    e: React.ChangeEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>
  ) => {
    const target = e.target as HTMLInputElement;
    if (target.value.length >= 3) {
      const response = await api.search({ location: target.value });
      setResults(response);
      if (searchMode == false) {
        dispatch(activate());
      }
    }
  };

  return (
    <>
      <div className="searchBar">
        <input
          onClick={openAutocomplete}
          onChange={openAutocomplete}
          onKeyDown={handleKeyDown}
          className="searchBar__field"
          type="text"
          placeholder="Buscar..."
        />
        <Icon className="searchBar__icon" iconTypes={IconTypes.search} />
        {searchMode && <AutoComplete results={results} />}
      </div>
    </>
  );
};
