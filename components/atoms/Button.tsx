import React from "react";
import styled from "styled-components";
import Icon, { Icons } from "./Icon";
import { Text } from "./Text";

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
  cta?: () => void;
}

const ButtonComponent = styled.button<ButtonProps>`
  height: ${(props) => (props.height ? props.height : "20px")};
  width: ${(props) => (props.width ? props.width : "50px")};
  display: flex;
  flex-direction: raw;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  border-radius: ${(props) => props.rounded};
  background: ${(props) => props.backgroundColor};
  cursor: pointer;
  opacity: ${(props) => props.opacity};
  &:focus {
    outline: 0;
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
}) => {
  return (
    <ButtonComponent
      height={height}
      width={width}
      rounded={rounded}
      backgroundColor={backgroundColor}
      justifyContent={justifyContent}
      opacity={opacity}
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
