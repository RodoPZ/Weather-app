import React from "react";
import "./index.scss";
import { Icon } from "../Icon/Icon";
import { IconTypes } from "../../models/Icon.model";
import { colors } from "../../models/vars";

export const TempCard = () => {
  return (
    <>
      <div className="tempCard">
        <div className="tempCard__leftSection">
          <h1 className="tempCard__title">City Name</h1>
          <p className="tempCard__time_label">Time</p>
          <p className="tempCard__date_label">Date</p>
          <div className="tempCard__temp_section">
            <p className="tempCard__temp_label">22</p>
            <p className="tempCard__tempUnit_label">label</p>
          </div>
        </div>
        <div className="tempCard__rightSection">
          <div className="tempCard__subSection_container">
            <div className="tempCard__subInfo">
              <Icon className="tempCard__subIcon" iconTypes={IconTypes.drop} />
              <p>Label</p>
            </div>
            <div className="tempCard__subInfo">
              <Icon className="tempCard__subIcon" iconTypes={IconTypes.wind} />
              <p>Label</p>
            </div>
          </div>
          <Icon iconTypes={IconTypes.sun} className={"tempCard__Icon"} />
        </div>
      </div>
    </>
  );
};
