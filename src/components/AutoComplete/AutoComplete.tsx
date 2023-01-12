import React, { useRef, useEffect, useContext } from "react";
import { Search } from "../../models/Search.model";
import { ListButton } from "../ListButton/ListButton";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import {
  activate,
  deactivate,
} from "../../features/searchMode/searchModeSlice";

interface propParams {
  results: Search[];
}

export const AutoComplete = ({ results }: propParams) => {
  const Element = useRef<HTMLInputElement>(null);
  const searchMode = useSelector((state: RootState) => state.searchMode.value);
  const dispatch = useDispatch();

  useEffect(() => {
    function handler(event: Event) {
      const target = event.target as HTMLInputElement;
      if (!Element.current?.contains(target) && searchMode == true) {
        dispatch(deactivate());
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <>
      <div className="autoComplete" ref={Element}>
        {results.map((result, index) => (
          <ListButton
            key={index}
            name={result.name}
            region={result.region}
            country={result.country}
            url={result.url}
          />
        ))}
      </div>
    </>
  );
};
