import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  MouseEvent,
} from "react";
import { Icon } from "../Icon/Icon";
import { IconTypes } from "../../models/Icon.model";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/fetchFromApi";
import { AutoComplete } from "../AutoComplete/AutoComplete";
import { Search } from "../../models/Search.model";
import { AppContext } from "../../context";

export const SearchBar = () => {
  const context = useContext(AppContext);
  const [results, setResults] = useState<Search[]>([]);

  let navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLInputElement;
    if (e.key === "Enter") {
      context.changeSearching(false);
      navigate(`/${target.value}`);
    } else if (e.key === "Escape") {
      context.changeSearching(false);
    }
  };

  const openAutocomplete = async (
    e: React.ChangeEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>
  ) => {
    const target = e.target as HTMLInputElement;
    if (target.value.length >= 3) {
      const response = await api.search({ location: target.value });
      setResults(response);
      if (context.searching != true) {
        context.changeSearching(true);
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
        {context.searching && <AutoComplete results={results} />}
      </div>
    </>
  );
};
