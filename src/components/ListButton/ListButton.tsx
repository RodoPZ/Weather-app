import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import {
  activate,
  deactivate,
} from "../../features/searchMode/searchModeSlice";
import { loadedToFalse } from "../../features/dataFromApi/dataFromApiSlice";

interface propTypes {
  name: string;
  region: string;
  country: string;
  url: string;
}

export const ListButton = ({ name, region, country, url }: propTypes) => {
  const searchMode = useSelector((state: RootState) => state.searchMode.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClick = () => {
    dispatch(deactivate());
    dispatch(loadedToFalse());
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
