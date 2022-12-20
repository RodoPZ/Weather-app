import React from "react";
import { Icon } from "../Icon/Icon";
import { IconTypes } from "../../models/Icon.model";
import "./index.scss";

export const TempMiniCard = () => {
  return (
    <div className="tempMiniCard">
      <p className="tempMiniCard__timeLabel">label</p>
      <div className="tempMiniCard__temp">
        <Icon className={"tempMiniCard__sunIcon"} iconTypes={IconTypes.sun} />
        <p className="tempMiniCard__sunLabel">label</p>
      </div>
      <div className="tempMiniCard__rainWind">
        <Icon
          className={"tempMiniCard__rainWindIcon"}
          iconTypes={IconTypes.drop}
        />
        <p className="tempMiniCard__rainWindLabel">label</p>
      </div>
      <div className="tempMiniCard__rainWind">
        <Icon
          className={"tempMiniCard__rainWindIcon"}
          iconTypes={IconTypes.wind}
        />
        <p className="tempMiniCard__rainWindLabel">label</p>
      </div>
    </div>
  );
};
