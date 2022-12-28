import React from "react";
import { Icon } from "../Icon/Icon";
import { IconTypes } from "../../models/Icon.model";
import "./index.scss";
export const LocationNotFound = () => {
  return (
    <>
      <div className="locationNotFound">
        <Icon
          iconTypes={IconTypes.upArrow}
          className="locationNotFound__icon"
        />
        <h1 className="locationNotFound__title">Ubicación no encontrada</h1>
        <p className="locationNotFound__subtitle">Busca una nueva ubicación</p>
      </div>
    </>
  );
};
