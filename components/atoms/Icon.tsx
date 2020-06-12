import React from "react";
import PlayIcon from "../../assets/play.svg";
import PlayCircle from "../../assets/play-circle.svg"
import StopIcon from "../../assets/stop.svg"
import InfoIcon from "../../assets/information.svg";
import RightArrow from "../../assets/arrow-right.svg";
import LeftArrow from "../../assets/arrow-left.svg";
import Logo from "../../assets/logo.svg";

export const Icons = {
  playIcon: PlayIcon,
  playCircle: PlayCircle, 
  stopIcon: StopIcon,
  infoIcon: InfoIcon,
  rightArrow: RightArrow,
  leftArrow: LeftArrow,
  logo: Logo,
};

interface IconsTypes {
  height?: number;
  width?: number;
  color?: string;
  name: keyof typeof Icons;
}

const Icon: React.FC<IconsTypes> = ({ ...props }) => {
  const { name } = props;
  const IconComponent: any = Icons[name];

  return IconComponent ? <IconComponent {...props} /> : <div />;
};

export default Icon;
