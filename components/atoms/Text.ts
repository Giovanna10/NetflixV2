import styled from "styled-components";

interface TextProps {
  size: number;
  family?: string;
  color?: string;
  weight?: number | string;
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
  height?: string;
  width?: string;
  lineHeight?: string;
  overflow?: string;
  textOverflow?: string;
  whiteSpace?: string;
}

export const Text = styled.p<TextProps>`
  font-size: ${(props) => `${props.size}px`};
  font-family: ${(props) => props.family};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
  height: ${(props) => props.height};
  line-height: ${(props) => props.lineHeight};
  white-space: ${(props) => props.whiteSpace};
  overflow: ${(props) => props.overflow};
  text-overflow: ${(props) => props.textOverflow};
`;
