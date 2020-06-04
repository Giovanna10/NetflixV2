import styled from "styled-components";

interface TextProps {
  size?: number;
  color?: string;
  weight?: number | string;
  family?: string;
  decoration?: string;
  cursor?: string;
}

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  font-family: ${(props) => props.family};
  text-decoration: ${(props) => props.decoration};
  cursor: ${(props) => props.cursor};
`;
