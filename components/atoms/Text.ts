import styled from "styled-components";

interface TextProps {
  size?: number;
  color?: string;
  weight?: number | string;
  family?: string;
  decoration?: string;
  cursor?: string;
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
  align?: string;
}

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  font-family: ${(props) => props.family};
  text-decoration: ${(props) => props.decoration};
  cursor: ${(props) => props.cursor};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
  height: ${(props) => props.height};
  line-height: ${(props) => props.lineHeight};
  white-space: ${(props) => props.whiteSpace};
  overflow: ${(props) => props.overflow};
  text-overflow: ${(props) => props.textOverflow};
  text-align: ${(props) => props.align};
`;
