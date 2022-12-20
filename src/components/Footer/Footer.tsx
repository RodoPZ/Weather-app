import React from "react";
import { Icon } from "../Icon/Icon";
import { IconTypes } from "../../models/Icon.model";
import { colors } from "../../models/vars";
import "./index.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <img className="logo" src="../../src/assets/Logo.png" alt="awa" />
      <div className="socials">
        <p className="socials__text">Made by RodoPZ</p>
        <div className="socials__imgLinkContainer">
          <Icon
            iconTypes={IconTypes.linkedin}
            fill={colors.surface3}
            className={"socials__iconLink"}
          />
          <Icon
            iconTypes={IconTypes.github}
            fill={colors.surface3}
            className={"socials__iconLink"}
          />
          <Icon
            iconTypes={IconTypes.web}
            fill={colors.surface3}
            className={"socials__iconLink"}
          />
        </div>
      </div>
      <p className="footer__apiLink">Weather API</p>
    </div>
  );
};
