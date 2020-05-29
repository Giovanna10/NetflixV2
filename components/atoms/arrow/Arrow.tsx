import styled from "styled-components";
import { rightArrow, leftArrow } from "../../../assets/arrow";

interface ArrowContainerProps {
  right?: boolean;
  slidePrev?: () => void;
  slideNext?: () => void;
}

const ArrowContainer = styled.div<ArrowContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${(props) => props.right && 0};
  width: 5%;
  background-color: rgba(171, 167, 167, .65);
`;

const Arrow: React.FC<ArrowContainerProps> = ({ right, slidePrev, slideNext}) => (
  <>
    {right ? (
      <ArrowContainer right onClick={slideNext}>
        <img src={rightArrow} style={{width: 25, height: 25}} />
      </ArrowContainer>
    ) : (
      <ArrowContainer onClick={slidePrev}>
        <img src={leftArrow} style={{width: 25, height: 25}} />
      </ArrowContainer>
    )}
  </>
);

export default Arrow;
