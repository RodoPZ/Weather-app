import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context";
import "./index.scss";

interface propTypes {
  name: string;
  region: string;
  country: string;
  url: string;
}

export const ListButton = ({ name, region, country, url }: propTypes) => {
  const context = useContext(AppContext);
  const navigate = useNavigate();
  const onClick = () => {
    context.changeSearching(false);
    navigate(`/${url}`);
  };

  return (
    <>
      <button className="listButton" onClick={() => onClick()}>
        <p className="listButton__label">{`${name}${
          region == "" ? "" : `, ` + region
        }. ${country}`}</p>
      </button>
    </>
  );
};
