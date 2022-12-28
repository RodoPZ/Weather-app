import React, { useRef, useEffect, useContext } from "react";
import { Search } from "../../models/Search.model";
import { ListButton } from "../ListButton/ListButton";
import { AppContext } from "../../context";
import "./index.scss";

interface propParams {
  results: Search[];
}

export const AutoComplete = ({ results }: propParams) => {
  const context = useContext(AppContext);
  const Element = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handler(event: Event) {
      const target = event.target as HTMLInputElement;
      if (!Element.current?.contains(target) && context.searching == true) {
        context.changeSearching(false);
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
