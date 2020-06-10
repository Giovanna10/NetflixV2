import React from "react";
import styled from "styled-components";
import Icon, { Icons } from "./Icon";
import { Text } from "./Text";
import {motion} from 'framer-motion'
interface ButtonProps {
  height?: string;
  width?: string;
  text?: string;
  textSize?: number;
  textColor?: string;
  icon?: keyof typeof Icons;
  iconHeight?: number;
  iconWidth?: number;
  rounded?: string;
  backgroundColor?: string;
  justifyContent?: "center" | "space-between" | "space-around";
  opacity?: number;
  border?: string;
  borderColor?: string;
  backgroundColorOnFocus?: string;
  cta?: () => void;
}

const ButtonComponent = styled(motion.button)<ButtonProps>`
  height: ${(props) => (props.height ? props.height : "20px")};
  width: ${(props) => (props.width ? props.width : "50px")};
  display: flex;
  flex-direction: raw;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  border-radius: ${(props) => props.rounded};
  background: ${(props) => props.backgroundColor};
  cursor: pointer;
  border: ${(props) => props.border};
  border-color: ${(props) => props.borderColor};
  opacity: ${(props) => props.opacity};
  &:focus {
    outline: 0;
    background-color: ${(props) => props.backgroundColorOnFocus};
  }
`;

const Button: React.FC<ButtonProps> = ({
  height,
  width,
  text,
  textSize,
  textColor,
  icon,
  iconHeight,
  iconWidth,
  rounded,
  backgroundColor,
  justifyContent,
  opacity,
  border,
  borderColor,
  backgroundColorOnFocus,
  cta,
}) => {
  return (
    <ButtonComponent
      height={height}
      width={width}
      rounded={rounded}
      backgroundColor={backgroundColor}
      justifyContent={justifyContent}
      opacity={opacity}
      onClick={cta}
      border={border}
      borderColor={borderColor}
      backgroundColorOnFocus={backgroundColorOnFocus}
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {icon && (
        <Icon
          name={icon}
          height={iconHeight}
          width={iconWidth}
          color="#000000"
        />
      )}
      <Text color={textColor} size={textSize}>
        {text}
      </Text>
    </ButtonComponent>
  );
};

export default Button;
