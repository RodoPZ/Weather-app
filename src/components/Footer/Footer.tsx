import React from "react";
import { Icon } from "../Icon/Icon";
import { IconTypes } from "../../models/Icon.model";
import { colors } from "../../models/vars";
import "./index.scss";
const imgUrl = new URL("assets/Logo.png", import.meta.url).href;

export const Footer = () => {
  return (
    <div className="footer">
      <a href="/London">
        <img className="logo" src={imgUrl} alt="nabigate to homepage " />
      </a>

      <div className="socials">
        <p className="socials__text">Made by RodoPZ</p>
        <div className="socials__imgLinkContainer">
          <a href="https://www.linkedin.com/in/rodopz/">
            <Icon
              iconTypes={IconTypes.linkedin}
              fill={colors.surface3}
              className={"socials__iconLink"}
            />
          </a>
          <a href="https://github.com/RodoPZ">
            <Icon
              iconTypes={IconTypes.github}
              fill={colors.surface3}
              className={"socials__iconLink"}
            />
          </a>

          <Icon
            iconTypes={IconTypes.web}
            fill={colors.surface3}
            className={"socials__iconLink"}
          />
        </div>
      </div>
      <a
        href="https://www.weatherapi.com/"
        title="Free Weather API"
        className="footer__apiLink"
      >
        <p className="footer__apiLink_label">Weather API</p>
      </a>
    </div>
  );
};
