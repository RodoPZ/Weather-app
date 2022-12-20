import React from "react";
import { colors } from "../../models/vars";
import { IconTypes } from "../../models/Icon.model";
import { propTypes } from "../../models/Icon.model";
import { ReactComponent as SearchIcon } from "assets/Search.svg";
import { ReactComponent as DropIcon } from "assets/Drop.svg";
import { ReactComponent as GithubIcon } from "assets/Github.svg";
import { ReactComponent as LinkedinIcon } from "assets/Linkedin.svg";
import { ReactComponent as MoonIcon } from "assets/Moon.svg";
import { ReactComponent as RainIcon } from "assets/Rain.svg";
import { ReactComponent as SunIcon } from "assets/Sun.svg";
import { ReactComponent as WebIcon } from "assets/Web.svg";
import { ReactComponent as WindIcon } from "assets/Wind.svg";

export const Icon = ({ iconTypes, fill, className }: propTypes) => {
  switch (iconTypes) {
    case IconTypes.search:
      return (
        <SearchIcon fill={fill || colors.surface3} className={className} />
      );
    case IconTypes.drop:
      return <DropIcon fill={fill || colors.water} className={className} />;
    case IconTypes.github:
      return (
        <GithubIcon fill={fill || colors.surface3} className={className} />
      );
    case IconTypes.linkedin:
      return (
        <LinkedinIcon fill={fill || colors.surface3} className={className} />
      );
    case IconTypes.moon:
      return <MoonIcon fill={fill} className={className} />;
    case IconTypes.rain:
      return <RainIcon fill={fill} className={className} />;
    case IconTypes.sun:
      return <SunIcon fill={fill || colors.sun} className={className} />;
    case IconTypes.web:
      return <WebIcon fill={fill || colors.surface3} className={className} />;
    case IconTypes.wind:
      return <WindIcon fill={fill || colors.surface2} className={className} />;
    default:
      return <p>Error</p>;
  }
};
